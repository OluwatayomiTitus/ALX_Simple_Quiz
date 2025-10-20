
function checkAnswer() {
  
  const correctAnswer = "4";
  const selectedOption = document.querySelector('input[name="quiz"]:checked');

  
  if (!selectedOption) {
    document.getElementById("feedback").textContent = "Please select an answer before submitting.";
    return;
  }
  const userAnswer = selectedOption.value;
  const feedbackElement = document.getElementById("feedback");

  if (userAnswer === correctAnswer) {

    feedbackElement.textContent = "Correct! Well done.";
    feedbackElement.style.color = "green";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
    feedbackElement.style.color = "red";
  }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
