import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import {
  collection,
  onSnapshot,
  deleteDoc,
  doc
} from "firebase/firestore";
import DataCard from "./DataCard";

export default function DataList() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "tasks"), (snapshot) => {
      setTasks(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
      setLoading(false); 
    });

    return () => unsub();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };


  if (loading) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks found</p>
      ) : (
        tasks.map((task) => (
          <DataCard
            key={task.id}
            task={task}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
}