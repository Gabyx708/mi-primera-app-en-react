import { createContext , useState, useEffect } from "react";
import { tareas as data } from "../data/task";

export const TaskContext = createContext();

export default function TaskContextProvider(props) {
  
  const [tasks, setTasks] = useState([]); //toma el arreglo

  function createTask(task){
    setTasks([...tasks,{
      title: task.title,
      id: tasks.length,
      descript: task.descripcion
    }]) //copia el array tasks y le agrega un valor
  }

  function deleteTask(taskId){
    setTasks(tasks.filter(task => task.id !== taskId)) //elimina el elemento
  }

  useEffect(() => {
    setTasks(data); //esto actualiza la vista cada vez que hay un cambio en tareas
  }, []);


  return (
    <TaskContext.Provider value={{
      tasks : tasks,
      deleteTask : deleteTask ,
      createTask : createTask
    }}>{props.children}</TaskContext.Provider>
  );
}
