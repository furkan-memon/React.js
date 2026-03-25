// src/components/FileCard.jsx
export default function FileCard({ file, onDelete }) {
  return (
    <div className="card">
      <img src={file.url} alt="file" />
      <button onClick={() => onDelete(file.path)}>
        Delete
      </button>
    </div>
  );
}