// src/pages/Home.jsx
import Upload from "../components/Upload";
import FileList from "../components/FileList";

export default function Home() {
  return (
    <div className="container">
      <h1>Storage Manager</h1>
      <Upload />
      <FileList />
    </div>
  );
}