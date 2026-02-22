

function createCountdown(seconds, onTick, onComplete) {
    let remainingTime = seconds;
    let timerId = null;
    let isPaused = false;
    function tick() {
        if (!isPaused) {
            onTick(remainingTime);
            remainingTime--;
            if (remainingTime < 0) {
                clearInterval(timerId);
                onComplete();
            }
        }
    }
    timerId = setInterval(tick, 1000);
    return {
        pause() {
            isPaused = true;
        },
        resume() {
            isPaused = false;
        }
    };
}

createCountdown(10, time => console.log(`Time left: ${time}s`), () => console.log("Countdown complete!"));
