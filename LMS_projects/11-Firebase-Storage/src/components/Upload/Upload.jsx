// src/components/Upload.jsx
import { useState } from "react";
import { storage } from "../firebase/firebaseConfig";
import { ref, uploadBytes } from "firebase/storage";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);

    const fileRef = ref(storage, `files/${Date.now()}-${file.name}`);
    await uploadBytes(fileRef, file);

    setLoading(false);
    setFile(null);
    alert("Uploaded successfully");
  };

  return (
    <div className="upload">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
}