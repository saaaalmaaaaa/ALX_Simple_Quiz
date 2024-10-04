function checkAnswer() {
    var correctAnswer = "4";
    var userAnswer = document.querySelector('input[name="quiz"]:checked');
    if (userAnswer) {
        var answerValue = userAnswer.value
        if (answerValue === correctAnswer){
            document.getElementById("feedback").innerText="correct! Well done."
        } else {
            document.getElementById("feedback").innerText="That's incorrect. Try again!"
        } 
    }else {
            document.getElementById("feedback").innerText = "Please select an answer.";

        }
    }
    document.getElementById("submit-answer").addEventListener("click", checkAnswer);


