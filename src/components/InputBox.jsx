import React from "react";

export default function InputBox({ prompt, setPrompt, onSubmit, loading }) {
  return (
    <div className="w-full mb-4">
      <textarea
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none bg-gray-50 text-sm box-border"
        rows="3"
        placeholder="Type your question..."
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />

      <button
        onClick={onSubmit}
        disabled={loading || !prompt.trim()}
        className="w-full mt-3 mb-9 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-7 rounded-lg disabled:opacity-50 transition"
      >
        {loading ? "Thinking..." : "Ask AI"}
      </button>
    </div>
  );
}
