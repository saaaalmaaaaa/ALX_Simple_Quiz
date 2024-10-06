function checkAnswer() {
    var correctAnswer = "4";
    var elementUserAnswer = document.querySelector('input[name="quiz"]:checked');
    if (elementUserAnswer) {
        var userAnswer = elementUserAnswer.value
        if (userAnswer === correctAnswer){
            document.getElementById("feedback").innerText="correct! Well done."
        } else {
            document.getElementById("feedback").innerText="That's incorrect. Try again!"
        } 
    }
    }
    document.getElementById('submit-answer').addEventListener("click", checkAnswer);


