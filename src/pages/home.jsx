import React, { useState } from 'react';
import "./home.css";
import Todo from '../layout/Todo/todo.jsx';
import { LuListTodo, LuCloudMoonRain,LuBellElectric} from "react-icons/lu";
import Pomodoro from '../layout/Pomodoro/pomodoro.jsx';
import Weather from '../layout/Weather/weather.jsx';
const Home = () => {
    const [page, setPage]= useState("weather");
    return (
        <div className='home'>
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
                page === "todo" ? <Todo/>:
                <Weather/>
                }
            </section>
        </div>
    );
};

export default Home;