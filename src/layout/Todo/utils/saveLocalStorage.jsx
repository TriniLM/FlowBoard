export default function saveLocalStorage(task){
    localStorage.setItem("task", JSON.stringify(task));
}