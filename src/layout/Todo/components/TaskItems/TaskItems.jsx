import React, { useState } from 'react';
import './taskItems.css';
import { GrUpdate } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import deletTask from '../../utils/deletTask';
import readyTask from '../../utils/readyTask';
import CounterTime from '../counterTime/CounterTime';

const TaskItems = ({setShowModal, task, listTask, setTask, setUpdateId}) => {
    const [viewSetting, setViewSetting] = useState(null)
    return (
        <div className={`taksItems ${viewSetting ? "openTaksItems":""}`}>
        <div className='taksItems-info' onClick={()=>{
            viewSetting === null? setViewSetting(true) : setViewSetting(!viewSetting);
        }}>
            <p className={`taksItems-title ${task.isCompleted? "task-completed":""}`}>{task.title}</p>
            <img src={`category/${task.category}.png`} alt="" className='taksItems-icon'/>
        </div>
        {task.date ?<CounterTime time ={task.date}/>:""}
        <div className={`taskItems-bottom ${viewSetting ? "btn-in": viewSetting == false ? "btn-out":"btn-static"}`}>
                <button onClick={()=>{
                    deletTask(listTask, setTask, task.id)
                    setViewSetting(false);
                }}><RiDeleteBin5Fill/><span>Delet</span></button>
                <button onClick={()=> {
                    setShowModal(true)
                    setUpdateId(task.id)
                    }}><GrUpdate /><span>Update</span></button>
                <button onClick={()=>{
                    readyTask(listTask, task.id, setTask);
                    setViewSetting(false);
                }}><FaCheck /><span>Ready</span></button>
            </div>
        </div>
    );
};

export default TaskItems;