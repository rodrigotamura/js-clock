const   handHour = document.querySelector('div.hour-hand'),
        handMin  = document.querySelector('div.min-hand'),
        handSec  = document.querySelector('div.second-hand');

function setTime() {
    const   date = new Date(),
            seconds = date.getSeconds(),
            minutes = date.getMinutes(),
            hours   = date.getHours(),
            rotationH = ((minutes / 12) * 360)+90,
            rotationM = ((minutes / 60) * 360)+90,
            rotationS = ((seconds / 60) * 360)+90;

        handHour.style.transform = `rotate(${rotationH}deg)`;
        handMin.style.transform = `rotate(${rotationM}deg)`;
        handSec.style.transform = `rotate(${rotationS}deg)`;
    
}

setInterval(setTime, 1000);