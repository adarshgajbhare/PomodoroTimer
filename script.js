const start = document.getElementById('start-btn');
const stop = document.getElementById('stop-btn');
const reset = document.getElementById('reset-btn');
const timer = document.getElementById('timer');

let minutes = 25;
let seconds = 0;
let timerId;

console.log(timer,"timer");
start.addEventListener('click', () => {
    timerId=setInterval(() => {

        if( seconds === 0 ) {
            seconds = 59;
            if( minutes !== 0 ){
                minutes--;
            }

        }else{
            seconds--;
        }
        console.log(seconds);
        console.log(minutes);
        timer.innerHTML = `${minutes}:${seconds}`;
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(timerId);
});

reset.addEventListener('click', () => {
    minutes = 25;
    seconds = 0;
    timer.innerHTML = `${minutes}:0${seconds}`;
})
