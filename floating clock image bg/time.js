let hourCl = document.querySelector(".hour")
let minuterCl = document.querySelector(".min")
let secondsCl = document.querySelector(".sec")
let periodCl = document.querySelector(".period")
let date = document.querySelector(".date")


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
    date.innerHTML = date;
}

const btn = document.getElementById('btn');
 
  btn.addEventListener('click', function onClick() {
  const clock = document.getElementById('clc') 
  console.log(clock.style.backgroundColor)
  if (clock.style.backgroundColor == 'rgb(33, 46, 38)'){
    clock.style.backgroundColor = 'rgb(107, 80, 117)';
  }else {
    clock.style.backgroundColor = 'rgb(33, 46, 38)';
    console.log(clock.style.backgroundColor)
  }
});


getTime()
setInterval(getTime, 1000)
