import saveLocalStorage from "./saveLocalStorage";

function deletTask (task, setTask, idDelet){
let newList = task.filter( e => e .id != idDelet);
setTask(newList);
saveLocalStorage(newList);
}
export default deletTask