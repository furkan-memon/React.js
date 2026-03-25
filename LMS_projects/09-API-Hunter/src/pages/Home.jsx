import { useEffect, useState } from "react";

export default function Home() {
  const [apis, setApis] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setApis(data);
        setLoading(false);
      });
  }, []);

  const filtered = apis.filter((api) =>
    api.title.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <h2 className="loader">Loading...</h2>;

  return (
    <div className="container">
      <h1 className="header">API Hunter</h1>

      <input
        className="search"
        placeholder="Search APIs..."
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid">
        {filtered.map((api) => (
          <div className="card" key={api.id}>
            <h3>{api.title}</h3>
            <p>{api.body}</p>
            <button>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}