// src/components/FileList.jsx
import { useEffect, useState } from "react";
import { storage } from "../firebase/firebaseConfig";
import {
  ref,
  listAll,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import FileCard from "./FileCard";

export default function FileList() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchFiles = async () => {
    const folderRef = ref(storage, "files/");
    const res = await listAll(folderRef);

    const fileData = await Promise.all(
      res.items.map(async (item) => {
        const url = await getDownloadURL(item);
        return { url, path: item.fullPath };
      })
    );

    setFiles(fileData);
    setLoading(false);
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  const handleDelete = async (path) => {
    const fileRef = ref(storage, path);
    await deleteObject(fileRef);
    fetchFiles();
  };

  if (loading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div className="file-list">
      {files.length === 0 ? (
        <p>No files found</p>
      ) : (
        files.map((file, i) => (
          <FileCard
            key={i}
            file={file}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}