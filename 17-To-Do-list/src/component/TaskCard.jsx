import { EllipsisVertical, Pen,Trash2} from "lucide-react";
import { useState } from "react";

const TaskCard = ({ Priority, Task, Date,onEdit,idx, onDelete,id }) => {
  const [open, setOpen] = useState(false);
 
  return (
    <div key={idx} className="bg-white rounded-2xl w-50 p-5 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow duration-200 relative">
      
     
      <div className="flex justify-between items-center">
        <span className="border-s-4 border-black px-3 py-1 rounded font-semibold bg-slate-200 text-sm">
          {Priority}
        </span>

        
        <button
          onClick={() => setOpen(!open)}
          className="p-1 rounded hover:bg-slate-200 "
        >
          <EllipsisVertical size={18} />
        </button>

        {open && (
          <div className="absolute top-0 right-[-100px]  flex bg-white border rounded-lg shadow-md w-28 z-10">
            <button
              onClick={() => {
                setOpen(false);
                onEdit(id)
               
                
              }}
              className="w-full text-left px-4 py-2 hover:bg-slate-100 hover:rounded-lg text-sm"
            >
              <Pen color="#000000"size={18}  />
            </button>
            <button
              onClick={() => {
                setOpen(false);
               onDelete(id)
              
              // console.log(id);
              
              }}
              className="w-full text-left px-4 py-2 hover:bg-slate-100 hover:rounded-lg text-sm"
            >
             <Trash2 color="#000000" size={18} />
            </button>
          </div>
        )}
      </div>

      {/* Task content */}
      <div className="flex flex-col gap-2">
        <p className="text-sm leading-relaxed">{Task}</p>
        <span className="text-[10px] text-right text-gray-600">
          {Date}
        </span>
      </div>
    </div>
  );
};

export default TaskCard;
