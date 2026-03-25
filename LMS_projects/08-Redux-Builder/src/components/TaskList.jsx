import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../features/tasks/taskSlice";
import { useState } from "react";

export default function TaskList() {
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!text.trim()) return;
    dispatch(addTask(text));
    setText("");
  };

  return (
    <div className="container">
      <h1>Task Builder</h1>

      <div className="form">
        <input
          value={text}
          placeholder="Enter your task..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <div className="list">
        {tasks.length === 0 ? (
          <p style={{ textAlign: "center", color: "white" }}>
            No tasks yet
          </p>
        ) : (
          tasks.map((task) => (
            <div className="card" key={task.id}>
              <p>{task.text}</p>
              <button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}