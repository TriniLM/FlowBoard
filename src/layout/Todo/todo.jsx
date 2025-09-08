import React, { useState } from 'react'
import "./todo.css"
import { BsRocket } from "react-icons/bs";
import { FiPlusCircle } from "react-icons/fi";
import TaskItems from './components/TaskItems/TaskItems';
import TaskModal from './components/taskModal/TaskModal';
export default function Todo({task, setTask}) {
  const [showModal, setShowModal] = useState(false);
  const [updateId, setUpdateId] = useState()
  return (
    <section className='todo'>
      <TaskModal showModal = {showModal} setShowModal = {setShowModal} task={task} setTask = {setTask} updateId={updateId} setUpdateId={setUpdateId}/>
      <div className="logo">
        <BsRocket className='logo__icon'/>
        <h1>To<span>Do</span></h1>
      </div>
      <div className="btnCreateTask">
        <button onClick={()=> setShowModal(true)}>Create New Task <FiPlusCircle /></button>
      </div>
      <div className="task">
        <div className="task__title">
          <h4 className='task__title-task'>Taks {task.length}</h4>
          <h4 className='task__title-concluded'>Concluded (0)</h4>
        </div>
        <div className="task__conteiner">
          {task.map((e)=>{
            return <TaskItems setShowModal = {setShowModal} key={e.id} task={e} listTask = {task} setTask = {setTask} setUpdateId = {setUpdateId}/>
          })}
        </div>
      </div>
    </section>
  )
}
