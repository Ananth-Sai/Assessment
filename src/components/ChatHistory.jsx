import React from "react";

export default function ChatHistory({ history, onClear }) {
  if (!history.length) {
    return <p className="text-gray-500 text-sm text-center mt-4">No chat history yet.</p>;
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-2 text-center">Chat History</h2>
      <div className="max-h-64 overflow-y-auto space-y-4 border p-4 rounded-md bg-gray-50">
        {history.map((entry, index) => (
          <div key={index} className="border-b pb-2">
            <p><span className="font-semibold text-blue-600">User:</span> {entry.prompt}</p>
            <p><span className="font-semibold text-green-600">Bot:</span> {entry.response}</p>
          </div>
        ))}
      </div>
      <button
        onClick={onClear}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
      >
        Clear History
      </button>
    </div>
  );
}
