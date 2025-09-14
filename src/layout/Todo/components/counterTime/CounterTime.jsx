import React, { useEffect, useState } from 'react';
import { FaClock } from "react-icons/fa6";
import "./counterTime.css";
import { differenceInMinutes, format } from 'date-fns';
const CounterTime = ({time}) => {
    const today = format(new Date(), 'yyyy-MM-dd HH:mm');
    const [differenceTime, setDifferenceTime] = useState(differenceInMinutes(time, today))
    const [timeH, setTimeH] = useState(Math.floor(differenceTime/60));
    const [timeM, setTimeM] = useState(differenceTime % 60);
    useEffect(()=>{
        setDifferenceTime(differenceInMinutes(time, today));
    },[time])
    useEffect(()=>{
        let interval = setInterval(() => {
            setDifferenceTime((prev)=>{
              const update = prev -1;
              return update >= 0 ? update: 0
            })
        }, 6000);
        return () => clearInterval(interval)
    },[])
    useEffect(()=>{
        setTimeH(Math.floor(differenceTime/60));
        setTimeM(differenceTime % 60);
    },[differenceTime])
    return (
        <div className='counterTime'>
            <FaClock />
            <p> {`${timeH}h ${timeM}m`}</p>
        </div>
    );
};

export default CounterTime;