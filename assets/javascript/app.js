var time = 10;

var timerfunc = setInterval(function timer() {
    if (time > 0){
        time--;
        document.getElementById("timerSeconds").innerHTML = time;
    } else {
        score();
        stopTimer();
    }
}, 1000);

function score() {
    var ans1 = $('input[type=radio]:checked' , '#q1').val();
    var ans2 = $('input[type=radio]:checked' , '#q2').val();
    var ans3 = $('input[type=radio]:checked' , '#q3').val();
    var ans4 = $('input[type=radio]:checked' , '#q4').val();
    var ans5 = $('input[type=radio]:checked' , '#q5').val();
    var userAnswers = [ans1, ans2, ans3, ans4, ans5];
    var correct = 0;
    var incorrect = 0;
    for (var i=0; i < userAnswers.length; i++){
        if(userAnswers[i] === "Right"){
            correct++;
        } else {
            incorrect++;
        }
    };
    alert("You got " + correct + " correct, and " + incorrect + " wrong.")
};

function stopTimer(){
    clearInterval(timerfunc);
};

