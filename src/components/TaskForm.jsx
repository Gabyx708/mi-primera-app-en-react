import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

export default function TaskForm() {
  //recibo la funcion
  const [title, setTitle] = useState(""); //valor inicial
  const [descripcion, setDescripcion] = useState("");
  const { createTask } = useContext(TaskContext); //de todo el contexto solo uso una funcion

  const handleSubmit = (e) => {
    e.preventDefault(); //cancela comportamiento por defecto
    console.log(title, descripcion);
    createTask({
      title,
      descripcion,
    }); //le paso a la funcion la nueva tarea

    setTitle("");
    setDescripcion(""); //pondra en vacio estos valores
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4  rounded-md">
      <h1 className="text-2xl font-bold text-white mb-3">Crea una nueva tarea!</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe una tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="detalla la tarea aqui"
          onChange={(e) => setDescripcion(e.target.value)}
          value={descripcion}
        ></textarea>
        <button className="bg-green-600 px-3 py-1 text-white rounded-md hover:bg-green-300">Guardar</button>
      </form>
    </div>
  );
}
