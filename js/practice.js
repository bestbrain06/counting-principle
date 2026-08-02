// ======================================
// PRACTICE PAGE JAVASCRIPT
// ======================================

// Select all questions

const questions = document.querySelectorAll(".question-card");

// Progress variables

let attempted = Number(localStorage.getItem("attempted")) || 0;

let correct = Number(localStorage.getItem("correct")) || 0;

// Update progress display

function updateProgress() {
  const attemptedDisplay = document.getElementById("attempted");

  const correctDisplay = document.getElementById("correct");

  const accuracyDisplay = document.getElementById("accuracy");

  const progressFill = document.getElementById("progress-fill");

  if (!attemptedDisplay) return;

  attemptedDisplay.textContent = attempted;

  correctDisplay.textContent = correct;

  let accuracy = 0;

  if (attempted > 0) {
    accuracy = Math.round((correct / attempted) * 100);
  }

  accuracyDisplay.textContent = `${accuracy}%`;

  const progress = Math.round((attempted / questions.length) * 100);

  progressFill.style.width = `${progress}%`;
}

updateProgress();

// ======================================
// HINT FUNCTIONALITY
// ======================================

const hintButtons = document.querySelectorAll(".hint-btn");

hintButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const hintBox = button.nextElementSibling;

    hintBox.classList.toggle("show");

    if (hintBox.classList.contains("show")) {
      button.textContent = "Hide Hint";
    } else {
      button.textContent = "💡 Show Hint";
    }
  });
});

// ======================================
// ANSWER CHECKING
// ======================================

const checkButtons = document.querySelectorAll(".check-btn");

checkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const questionCard = button.closest(".question-card");

    const input = questionCard.querySelector(".answer-input");

    const feedback = questionCard.querySelector(".feedback");

    const correctAnswer = Number(input.dataset.answer);

    const userAnswer = Number(input.value);

    // Prevent empty answers

    if (input.value === "") {
      feedback.textContent = "Please enter an answer first.";

      feedback.className = "feedback incorrect";

      return;
    }

    // Prevent checking twice

    if (input.dataset.checked === "true") {
      return;
    }

    input.dataset.checked = "true";

    attempted++;

    if (userAnswer === correctAnswer) {
      correct++;

      feedback.textContent = "✓ Correct! Great work.";

      feedback.className = "feedback correct";
    } else {
      feedback.textContent = `✗ Incorrect. The correct answer is ${correctAnswer}.`;

      feedback.className = "feedback incorrect";
    }

    // Save progress

    localStorage.setItem("attempted", attempted);

    localStorage.setItem("correct", correct);

    updateProgress();
  });
});

// ======================================
// EXPLANATION TOGGLE
// ======================================

const explanationButtons = document.querySelectorAll(".explanation-btn");

explanationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const explanation = button.nextElementSibling;

    explanation.classList.toggle("show");

    if (explanation.classList.contains("show")) {
      button.textContent = "Hide Explanation";
    } else {
      button.textContent = "View Explanation";
    }
  });
});

// ======================================
// RESET PRACTICE
// ======================================

const resetButton = document.querySelector(".reset-btn");

if (resetButton) {
  resetButton.addEventListener("click", () => {
    const confirmReset = confirm(
      "Are you sure you want to reset your practice progress?",
    );

    if (confirmReset) {
      attempted = 0;

      correct = 0;

      localStorage.removeItem("attempted");

      localStorage.removeItem("correct");

      document.querySelectorAll(".answer-input").forEach((input) => {
        input.value = "";

        input.dataset.checked = "false";
      });

      document.querySelectorAll(".feedback").forEach((feedback) => {
        feedback.textContent = "";

        feedback.className = "feedback";
      });

      updateProgress();
    }
  });
}
