import { useState } from 'react'
import { EllipsisVertical, Pen, Trash2 } from 'lucide-react'

const TaskCard = ({ id, text, priority, date, onEdit, onDelete }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-56 bg-white text-black p-4 rounded-xl shadow-md">

      <div className="flex justify-between items-center">
        <span className="px-3 py-1 bg-slate-200 rounded-full text-sm font-semibold">
          {priority}
        </span>

        <button onClick={() => setOpen(!open)}>
          <EllipsisVertical size={18} />
        </button>
      </div>

      {open && (
        <div className="absolute right-2 top-10 bg-white border rounded shadow">
          <button
            onClick={() => onEdit(id)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 w-full"
          >
            <Pen size={14} /> Edit
          </button>
          <button
            onClick={() => onDelete(id)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-600 w-full"
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      )}

      <p className="mt-4 font-medium">{text}</p>
      <span className="text-xs text-gray-500">{date}</span>
    </div>
  )
}

export default TaskCard
