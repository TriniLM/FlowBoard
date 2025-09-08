import { v4 as uuidv4 } from 'uuid';
function createNewTask (title, category, date, time, defineTime, task, setTask, updateId, setUpdateId){
    const taskNew = {
    "id": updateId? updateId:uuidv4(),
    "title":title,
    "category":category,
    "defineTime": defineTime,
    "date":defineTime? date + " " + time:false,
    "isCompleted": false
  }
  console.log(taskNew);
  if(updateId){
    const updateTask = task.map((task)=> task.id == updateId? taskNew: task);
    setTask(updateTask);
    setUpdateId("")
  }else{
    setTask(task =>[...task, taskNew])
  }
}

export default createNewTask