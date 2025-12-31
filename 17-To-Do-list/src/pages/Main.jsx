import { useState, useEffect } from 'react'
import SearchBox from '../component/SearchBox'
import TaskCard from '../component/TaskCard'
import AddTask from '../component/AddTask'

const Main = () => {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks')
    return stored ? JSON.parse(stored) : []
  })

  const [taskText, setTaskText] = useState('')
  const [priority, setPriority] = useState('')
  const [date, setDate] = useState('')
  const [search, setSearch] = useState('')
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  const filteredTasks = tasks.filter(t =>
    t.text.toLowerCase().includes(search.toLowerCase())
  )

  const handleEdit = (id) => {
    const task = tasks.find(t => t.id === id)
    if (!task) return

    setTaskText(task.text)
    setPriority(task.priority)
    setDate(task.date)
    setEditId(id)
  }

  const handleDelete = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10 flex gap-8">

      {/* FORM */}
      <div className="w-1/3">
        <AddTask
          tasks={tasks}
          setTasks={setTasks}
          taskText={taskText}
          setTaskText={setTaskText}
          priority={priority}
          setPriority={setPriority}
          date={date}
          setDate={setDate}
          editId={editId}
          setEditId={setEditId}
        />
      </div>

      {/* LIST */}
      <div className="w-2/3 space-y-6">
        <SearchBox search={search} setSearch={setSearch} />

        <div className="flex flex-wrap gap-4">
          {filteredTasks.map(task => (
            <TaskCard
              key={task.id}
              {...task}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Main
