const SearchBox = ({ search, setSearch }) => (
  <input
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search task..."
    className="w-72 border border-slate-600 rounded-lg px-4 py-2 bg-transparent text-white"
  />
)

export default SearchBox
