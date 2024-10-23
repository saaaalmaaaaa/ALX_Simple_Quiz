
// Function Declaration
function checkAnswer() {
    // Identify the Correct Answer
    const correctAnswer = "4"; // This represents the correct answer to your quiz question.

    // Retrieve the User’s Answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked').value;

    // Compare the User’s Answer with the Correct Answer
    const feedback = document.getElementById('feedback');
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add an Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
