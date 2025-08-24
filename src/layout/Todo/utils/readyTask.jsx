function readyTask (listTask, idTask, setTask){
    let newList = listTask.map((task)=> task.id == idTask ? {...task, isCompleted:true}: task);
    setTask(newList);
}
export default readyTask