import react, { useState } from "react";
import "./App.css";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [neWTasks, setNewTasks] = useState("");

  const handleChange = event => {
    setNewTasks(event.target.value);
  };
  const addTask = event => {
    event.preventDefault();
    setTasks([...tasks, neWTasks]);
  };
  const removeTask = (texto) =>{
    setTasks(tasks.filter((tarea) => tarea !== texto));
  }

  return (
    <div>
      <form onSubmit={addTask}>
        <div>
          <h1>Tareas</h1>
          <input type="text" value={neWTasks} onChange={handleChange} />
        </div>
        <button onClick={addTask}>enviar formulario</button>
      </form>
      {tasks.map((task, index) => (
        <li key={index}>{task} <button onClick={() => removeTask(task)}>Eliminar</button></li>
      ))}
    </div>
  );
}

export default TodoList;