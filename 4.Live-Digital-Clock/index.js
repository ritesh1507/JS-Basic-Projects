
setInterval(update,1);

function update(){
    let date=new Date();
    function formatTime(date){
        let hour=date.getHours();
        let min=date.getMinutes();
        if(min<10) return `${hour}:0${min}`;
        return `${hour}:${min}`; 
    }

    function formatSec(date){
        let sec=date.getSeconds();
        return `${sec}`;
    }

    function formatmillisec(date){
        let ms=date.getMilliseconds();
        return `${ms}`;
    }

    document.getElementById("hourMin").innerHTML=formatTime(date);
    document.getElementById("second").innerHTML=formatSec(date);
    document.getElementById("millisec").innerHTML=formatmillisec(date);

}