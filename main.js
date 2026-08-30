let clock = document.getElementById("clock");

function showTime(){

    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let period = "AM";

    if(hour >= 12){
        period = "PM";
    }

    if(hour > 12){
        hour = hour - 12;
    }


    if(hour < 10){
        hour = "0" + hour;
    }

    if(minute < 10){
        minute = "0" + minute;
    }

    if(second < 10){
        second = "0" + second;
    }

    clock.innerHTML = hour + ":" + minute + ":" + second + " " + period;
}

showTime();

setInterval(showTime, 1000);