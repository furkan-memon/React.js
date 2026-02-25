const PrioritySelect = ({ value, setValue }) => (
  <select
    value={value}
    onChange={e => setValue(e.target.value)}
    className="w-full border border-slate-600 rounded-lg px-3 py-2 bg-slate-800 text-white"
  >
    <option value="" disabled>Select Priority</option>
    <option>Top Priority</option>
    <option>Mid Priority</option>
    <option>Low Priority</option>
  </select>
)

export default PrioritySelect
