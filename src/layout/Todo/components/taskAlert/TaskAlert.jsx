import {React, useEffect, useState} from 'react';
import "./taskAlert.css";
import { AiFillAlert, AiOutlineClose  } from "react-icons/ai";
import { differenceInMinutes, format,  } from 'date-fns';
import notificationWindows from '../../utils/windowsNotification';
export default function TaskAlert({task}) {
  const sound = new Audio("/public/sound/AlertTask.mp3");
  const {title, defineTime, date, isCompleted} = task;
  const dateToday = format(new Date(), 'yyyy-MM-dd HH:mm');
  const [differenceTime, setDifferenceTime] = useState(differenceInMinutes(date, dateToday));
  const [alertActive, setAlertActive] = useState(false);
 useEffect(()=>{
  let interval = setInterval(()=>{
    setDifferenceTime((prev)=>{
      if(prev > 0){
      const update = prev -1;
      return update >= 0? update:0
      }
      else{
        clearInterval(interval);
      }
    })
  },6000)
  return ()=> clearInterval(interval)
 },[])
useEffect(()=>{
   setDifferenceTime(differenceInMinutes(date, dateToday));
},[date])

  useEffect(()=>{
    if(differenceTime == 0){
      sound.play();
      setAlertActive(true);
      notificationWindows(task.title);
    }
  },[differenceTime])
  return (
    <div className={`taskAlert ${!alertActive? "alertVisible":""}`}>
      <AiFillAlert className='taskAlert__icon'/>
      <div className="taskAlert__information">
        <span className='taskAlert__information-title'>¡Ey, es momento!</span>
        <p className='taskAlert__information-taskTitle'>{title}</p>
      </div>
      <AiOutlineClose className='taskAlert__close'/>
    </div>
  )
}

