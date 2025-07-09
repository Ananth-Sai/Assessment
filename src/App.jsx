import React, { useState } from "react";
import InputBox from "./components/InputBox";
import ReplyBox from "./components/ReplyBox";
import { fetchAIResponse } from "./services/OpenAiService";
import ChatHistory from "./components/ChatHistory";

const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;

function App() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleAsk = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");
    setResponse("");

    try {
      const reply = await fetchAIResponse(prompt, API_KEY);
      setResponse(reply);
      setHistory((prev) => [...prev, { prompt, response: reply }]);
      setPrompt("");
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-xl shadow-md border border-gray-200 px-6 py-6 max-w-sm mx-auto">
        <div className="flex flex-col items-center text-center mb-6 break-words w-full">
          <div className="w-8 h-8 mb-2 flex items-center justify-center bg-blue-100 rounded-full">
            <span className="text-lg">💡</span>
          </div>

          <h1 className="text-2xl font-semibold text-gray-800 mb-2">Ask AI</h1>
        </div>
        <InputBox
          prompt={prompt}
          setPrompt={setPrompt}
          onSubmit={handleAsk}
          loading={loading}
        />
        {error && (
          <p className="text-red-500 text-sm text-center mb-4 break-words w-full">
            {error}
          </p>
        )}
        <ReplyBox response={response} />
        <div className="text-center mt-6">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="mt-4 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm px-3 py-2 rounded-md"
          >
            {showHistory ? "Hide Chat History" : "Show Chat History"}
          </button>

          {showHistory && (
            <ChatHistory history={history} onClear={() => setHistory([])} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
