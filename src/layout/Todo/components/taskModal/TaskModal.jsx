import React, { useState, useEffect} from 'react'
import "./taskModal.css";
import createNewTask from '../../utils/createTask';
import updateTask from '../../utils/updateTask';
export default function TaskModal({showModal,setShowModal,task, setTask, updateId, setUpdateId}) {
 useEffect(() => {
  // Código que quieres ejecutar (efecto)
  if(updateId){
    const taskSelect = task.find(task => task.id == updateId);
    setTitleTask(taskSelect.title)
  }

}, [updateId]);
  
  const [optional, setOptional] = useState(false);
  const [titleTask, setTitleTask] = useState();
  const [categoryTask, setCategoryTask] = useState();
  const [dateTask, setDateTask] = useState();
  const [timeTask, setTimeTask] = useState();
  return (
    <div className={`taskModal-conteiner ${showModal? "modal-visible":""}`}>
        <form className="taskModal" onSubmit={(e)=>{
          e.preventDefault();
          createNewTask(titleTask, categoryTask, dateTask, timeTask, optional, task, setTask, updateId, setUpdateId);
          setShowModal(false);
          e.target[0].value = "";
          setTitleTask("")
        }}>
            <h3 className='taskModal-title'>{updateId?"Update Task":"Add new task"}</h3>
            <div className="taskModal-info">
              <textarea value={titleTask} className='taskModal-info__task' 
              maxLength={60} required={true} placeholder='Task title' 
              onChange={(e) => {
                setTitleTask(e.target.value);
                }}>
              </textarea>
              <select className='taskModal-info__select' required={true} onChange={(e)=> setCategoryTask(e.target.value)}>
                <option value="" disabled selected>
                  Select category
                </option>
                <option value="finance">
                  Finance
                </option>
                <option value="home">
                  Home
                </option>
                <option value="priority">
                  Priority
                </option>
                <option value="project">
                  Project
                </option>
                <option value="study">
                  Study
                </option>
                <option value="well-being">
                  Well being
                </option>
                <option value="other">
                  Other
                </option>
              </select>
            </div>
            <div className="taskModal-optional">
              <div className="taskModal-optional__btn">
                <span>Define time?</span>
                <div className={`taskModal-optional__btn-buttom ${optional? "optional-visible":""}`} onClick={()=> setOptional(!optional)}>
                  <span></span>
                </div>
              </div>     
                <div className="taskModal-optional__date">
                  <input type="date" name="" id="" disabled={!optional} onChange={(e)=> setDateTask(e.target.value)} />
                  <input type="time" name="" id="" disabled={!optional}  onChange={(e)=> setTimeTask(e.target.value)}/>
                </div>       
            </div>
            <div className="taskModal-button">
             <button className={`${updateId? "button-cancel-none":""}`} onClick={(e)=> {
                e.preventDefault();
                setShowModal(false);
                }}>Cancel</button>
              <button type='submit'>Save</button>
            </div>
        </form>
    </div>
  )
}
