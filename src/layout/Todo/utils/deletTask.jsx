function deletTask (task, setTask, idDelet){
let newList = task.filter( e => e .id != idDelet);
setTask(newList);
}
export default deletTask