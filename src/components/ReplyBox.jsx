import React from "react";

export default function ReplyBox({ response }) {
  if (!response) return null;
  return (
    <div className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg mt-4">
      <p className="text-sm text-gray-700 whitespace-pre-line leading-relaxed">{response}</p>
    </div>
  );
}
