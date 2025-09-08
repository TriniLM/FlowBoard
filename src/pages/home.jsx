import React, { useState } from 'react';
import "./home.css";
import Todo from '../layout/Todo/todo.jsx';
import { LuListTodo, LuCloudMoonRain,LuBellElectric} from "react-icons/lu";
import Pomodoro from '../layout/Pomodoro/pomodoro.jsx';
import Weather from '../layout/Weather/weather.jsx';
import TaskAlert from '../layout/Todo/components/taskAlert/TaskAlert.jsx';
const Home = () => {
    const [page, setPage]= useState("weather");
    const [task, setTask] = useState([]);
    return (
        <div className='home'>
            <div className="taskAlertConteiner">
                {!task? "": task.map((task)=>{
                    if(task.defineTime){
                       return <TaskAlert task={task} key={task.id}/>
                    }
                })}
            </div>
            <nav className="navBar">
                <li className={`navBar_items ${page == "weather" ? "active" :""}`}
                onClick={()=>{
                    setPage("weather");
                }}><LuCloudMoonRain /></li>
                <li className={`navBar_items ${page == "pomodoro" ? "active":""}`}
                onClick={()=>{
                    setPage("pomodoro");
                }}><LuBellElectric /></li>
                <li className={`navBar_items ${page == "todo" ? "active":""}`}
                onClick={()=>{
                    setPage("todo");
                }}><LuListTodo /></li>
            </nav>
            <section className="pages">
                {
                page === "weather" ? <Weather/> : 
                page === "pomodoro" ? <Pomodoro/> :
                page === "todo" ? <Todo task = {task} setTask = {setTask}/>:
                <Weather/>
                }
            </section>
        </div>
    );
};

export default Home;