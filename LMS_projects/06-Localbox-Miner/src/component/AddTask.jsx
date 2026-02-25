import TaskInput from './TaskInput'
import PrioritySelect from './PrioritySelect'
import DateInput from './DateInput'
import AddTaskButton from './AddTaskButton'

const AddTask = ({
  tasks,
  setTasks,
  taskText,
  setTaskText,
  priority,
  setPriority,
  date,
  setDate,
  editId,
  setEditId
}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!taskText || !priority || !date) return alert('Fill all fields')

    if (editId) {
      setTasks(prev =>
        prev.map(t =>
          t.id === editId
            ? { ...t, text: taskText, priority, date }
            : t
        )
      )
      setEditId(null)
    } else {
      setTasks(prev => [
        ...prev,
        {
          id: Date.now(),
          text: taskText,
          priority,
          date
        }
      ])
    }

    setTaskText('')
    setPriority('')
    setDate('')
  }

  return (
    <div className="bg-slate-900 rounded-2xl border border-slate-700 p-6">
      <h2 className="text-xl font-bold mb-4">
        {editId ? 'Edit Task' : 'Add Task'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <TaskInput value={taskText} setValue={setTaskText} />
        <PrioritySelect value={priority} setValue={setPriority} />
        <DateInput value={date} setValue={setDate} />
        <AddTaskButton editId={editId} />
      </form>
    </div>
  )
}

export default AddTask
