var time = 25;

var timerfunc = setInterval(function timer() {
    if (time > 0){
        time--;
        document.getElementById("timerSeconds").innerHTML = time;
    } else {
        alert("Game Over");
        stopTimer();
    }
}, 1000);



function stopTimer(){
    clearInterval(timerfunc);
};

