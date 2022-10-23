const timer = document.querySelector('#timer');
const minutes = timer.querySelector('.minutes');
const seconds = timer.querySelector('.seconds');
let timerTime = 0;
let interval;
let isRanning = false;

function startTimer() {
    if (isRanning === false) {
        interval = setInterval(incrementTimer, 1000);
        isRanning = true;
    }

}

function stopTimer() {
    if (isRanning === true) {
        clearInterval(interval);
        isRanning = false;
    }
}

function resetTimer() {
    stopTimer();
    timerTime = 0;
    minutes.innerText = '00';
    seconds.innerText = '00';
}

function incrementTimer() {
    timerTime++;
    const numberOfMinutes = Math.floor(timerTime / 60);
    const numberOfSeconds = Math.floor(timerTime % 60);
    minutes.innerText = zeroNumber(numberOfMinutes);
    seconds.innerText = zeroNumber(numberOfSeconds);
}

function zeroNumber(number) {
    return ( number < 10 ) ? '0' + number : number;
}

export { startTimer, stopTimer, resetTimer, minutes, seconds };