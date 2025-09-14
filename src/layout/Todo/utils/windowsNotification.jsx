export default function notificationWindows(titulo){
    Notification.requestPermission().then((Permissions)=>{
        if(Permissions === 'granted'){
            new Notification("¡Ey es momento!",{
                body: titulo,
                icon: "/src/assets/alert.png"
            })
        }
    })
}