setInterval(timer(), 1000);



function timer() { 
    var time = 5;
    if (time > 0){
        time--;
        console.log(time);
    } else {
        alert("Game Over");
        stopTimer();
    }
};

function stopTimer(){
    clearInterval(timer);
};




// function timer(){
//     if (time > 0){
//         time--;
//         return time;
//     }
//     else {alert("Game Over")};
// }