import { useState } from "react";

export default function TTSApp() {
  const [text, setText] = useState("");
  
  const speakText = () => {
    if (text.trim() === "") return;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-xl font-bold mb-4">Trice Advice</h1>
      <textarea
        className="w-full p-2 border rounded mb-4"
        rows="4"
        placeholder="Type your message here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={speakText}
      >
        Speak
      </button>
    </div>
  );
}
