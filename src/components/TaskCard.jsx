import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext';
import { BsFillAlarmFill } from "react-icons/bs";

export default function TaskCard({ task }) {
  //recibo deleteTask para utilizarla

const {deleteTask} = useContext(TaskContext) //del TODO solo traigo deleteTask
const valor = useContext(TaskContext)
console.log(valor)

  function eliminarTask() {
    alert("has eliminado la tarea :c " + task.id);
  }

  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
      <BsFillAlarmFill />
      <h1 className='text-xl fond-bold capitalize'>{task.title}</h1>
      <p className='text-sm text-gray-500'>{task.descript}</p>
      <p>{task.id}</p>
      <button  className='bg-red-500 p-2 rounded-md mt-4 hover:bg-red-400' onClick={() => deleteTask(task.id)}>Eliminar</button>
    </div>
  );
}
