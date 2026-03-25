export default function DataCard({ task, onDelete }) {
  return (
    <div className="card">
      <h3>{task.title}</h3>
      <p>{task.desc}</p>
      <button onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </div>
  );
}