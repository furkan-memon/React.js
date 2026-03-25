export default function ApiCard({ api }) {
  return (
    <div className="card">
      <h3>{api.API}</h3>
      <p>{api.Description}</p>
      <p><b>Category:</b> {api.Category}</p>
      <a href={api.Link} target="_blank">Visit API</a>
    </div>
  );
}