import { useState } from "react";

const CharacterCounter = () => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-6 shadow">
      <h2 className="mb-3 text-xl font-semibold">
        Character Counter
      </h2>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        className="w-full rounded-md border p-3 focus:outline-none focus:ring-2 focus:ring-black"
        
      />

      <div className="mt-3 flex justify-between text-sm text-gray-600">
        <span>Total Characters:</span>
        <span className="font-medium">{text.length}</span>
      </div>
    </div>
  );
}
export default CharacterCounter;