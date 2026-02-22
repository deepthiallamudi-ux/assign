
function mySetInterval(callback, delay) {
    let timerId;
    function tick() {
        callback();
        timerId = setTimeout(tick, delay);
    }
    tick();
    return timerId;
}
function myClearInterval(id) {
    clearTimeout(id);
}
