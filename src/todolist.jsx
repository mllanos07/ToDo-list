import react, { useState } from "react";
import "./App.css";
function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [neWTasks, setNewTasks] = useState({
    tarea:"",
    categoria:""
  });

  const handleChange = event => {
    setNewTasks({
      tarea:event.target.value,
      categoria:neWTasks.categoria
    });
  };
  const handleCategoria = event => {
    setNewTasks({
      tarea:neWTasks.tarea,
      categoria:event.target.value
    });
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
          <input type="text" value={neWTasks.tarea} onChange={handleChange} />
          <select onChange={handleCategoria}>
            <option value=""></option>
            <option value="Casa">casa</option>
            <option value="Escuela">escuela</option>
            <option value="Compras">compras</option>
            <option value="Ocio">ocio</option>
          </select>
        </div>
        <button onClick={addTask}>enviar formulario</button>
      </form>
      {tasks.map((task, index) => (
        <li key={index}>Tarea: {task.tarea} categoria: {task.categoria} <button onClick={() => removeTask(task)}>Eliminar</button></li>
      ))}
    </div>
  );
}

export default TodoList;