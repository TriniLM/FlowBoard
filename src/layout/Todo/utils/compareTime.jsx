import { differenceInHours, differenceInMinutes, format } from "date-fns"
function compareTime(time){
    let today = format(new Date(), 'yyyy-MM-dd HH:mm')
    let difference = differenceInMinutes(time, today);
    let hour = Math.floor(difference/60);
    let minute = difference % 60;
    let dateHour = {
        hour:hour,
        minute:minute,
        differenceTime:difference
    }
    return dateHour;
}

export default compareTime