// src/components/DataForm.jsx
import { useState } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function DataForm() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title) return;

    await addDoc(collection(db, "tasks"), {
      title,
      desc,
      createdAt: new Date()
    });

    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
  <input
    placeholder="Enter task title..."
    value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <input
    placeholder="Enter description..."
    value={desc}
    onChange={(e) => setDesc(e.target.value)}
  />
  <button>Add</button>
</form>
  );
}