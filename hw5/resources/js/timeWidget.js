const endOfSam = new Date('2022-12-22T00:00:00');

function timeUntil( date ){
    let now = date.getTime();
    let end = endOfSam.getTime();
    let secBetween = end - now;
    let totalSec = secBetween / 1000;
    let days;
    let hours;
    let mins;
    days = Math.floor(totalSec / 86400);
    totalSec -= days*86400;
    hours = Math.floor(totalSec / 3600);
    totalSec -= hours*3600;
    hours--;
    mins = Math.floor(totalSec / 60);
    totalSec -= mins*60;
    // console.log(days);
    // console.log(hours);
    // console.log(mins);
    // console.log(totalSec);
    return {
        days: days,
        hours: hours,
        minutes: mins,
        seconds: Math.round(totalSec)
    };
}

function runFunc(){
    let curTime = new Date();
    let resTime = timeUntil(curTime);
    const resultElement = document.getElementById("timerContent");
    resultElement.innerText = `Days: ${resTime.days}, Hours: ${resTime.hours}, Minutes: ${resTime.minutes}, Seconds: ${resTime.seconds}`;
}

setInterval(runFunc, 1000); 