
const birthday = new Date('Dec 10, 2024').getTime();

daySet = document.getElementById('days');

setInterval(countDown, 100);

function countDown() {
time = new Date();

distance = birthday - time;


//milliseconds to seconds, to minutes, to an hour, to a day
//Math.floor() removes decimals
//console.log(days);
days = Math.floor(distance/(1000 * 60 * 60 * 24)); 
hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
seconds = Math.floor((distance % (1000 * 60)) / 1000);
dSeconds = Math.floor(distance % 1000 / 100);

// console.log(days);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);

document.getElementById('days').innerHTML = days;
document.getElementById('hrs').innerHTML = hours;
document.getElementById('mins').innerHTML = minutes;
document.getElementById('secs').innerHTML = seconds;
document.getElementById('dSec').innerHTML = "." + dSeconds;
}
