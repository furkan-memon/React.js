const TaskInput = ({ value, setValue }) => (
  <input
    value={value}
    onChange={e => setValue(e.target.value)}
    placeholder="What is your task?"
    className="w-full border border-slate-600 rounded-lg px-3 py-2 bg-transparent text-white"
  />
)

export default TaskInput
