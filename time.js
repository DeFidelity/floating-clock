let hourCl = document.querySelector(".hour")
let minuterCl = document.querySelector(".min")
let secondsCl = document.querySelector(".sec")
let periodCl = document.querySelector(".period")


function getTime() {
    var date = new Date();

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let period = "AM"

    if (hr>12){
        period = "PM";
        hr -= 12;
    }

    hr = hr < 10 ? "0" + hr: hr;
    min = min < 10 ? "0" + min: min;
    sec = sec < 10 ? "0" + sec: sec;

    hourCl.innerHTML = hr;
    minuterCl.innerHTML = min;
    secondsCl.innerHTML = sec;
    periodCl.innerHTML = period;
}

getTime()
setInterval(getTime, 1000)
