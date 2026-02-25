const DateInput = ({ value, setValue }) => (
  <input
    type="date"
    value={value}
    onChange={e => setValue(e.target.value)}
    className="w-full border border-slate-600 rounded-lg px-3 py-2 bg-transparent text-white"
  />
)

export default DateInput
