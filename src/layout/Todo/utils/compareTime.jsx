import { differenceInHours, differenceInMinutes, format } from "date-fns"
function compareTime(time){
    let today = format(new Date(), 'yyyy-MM-dd HH:mm')
    let diferencia = differenceInMinutes(time, today);
    let hour = Math.floor(diferencia/60);
    let minute = diferencia % 60;
    console.log(minute);
}

export default compareTime