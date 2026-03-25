export default function SearchBar({ setSearch }) {
  return (
    <input
      className="search"
      placeholder="Search APIs..."
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}