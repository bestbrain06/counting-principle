const questionCards = document.querySelectorAll(".question-card");

const attemptedDisplay = document.getElementById("attempted");
const correctDisplay = document.getElementById("correct");
const accuracyDisplay = document.getElementById("accuracy");
const progressFill = document.getElementById("progress-fill");

const resetBtn = document.querySelector(".reset-btn");

let attempted = 0;
let correct = 0;

updateProgress();

/* ================================
   Hint Buttons
================================ */

document.querySelectorAll(".hint-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const hint = button.nextElementSibling;

    hint.classList.toggle("show");

    button.textContent = hint.classList.contains("show")
      ? "Hide Hint"
      : "💡 Show Hint";
  });
});

/* ================================
   Check Answers
================================ */

document.querySelectorAll(".check-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".question-card");

    const input = card.querySelector(".answer-input");

    const feedback = card.querySelector(".feedback");

    const explanationBtn = card.querySelector(".explanation-btn");

    const correctAnswer = Number(input.dataset.answer);

    const userAnswer = Number(input.value);

    if (input.value.trim() === "") {
      alert("Please enter an answer.");

      return;
    }

    if (button.disabled) return;

    attempted++;

    feedback.classList.add("show");

    if (userAnswer === correctAnswer) {
      correct++;

      feedback.textContent = "✔ Correct! Well done.";

      feedback.className = "feedback show correct";
    } else {
      feedback.textContent = `✖ Incorrect. The correct answer is ${correctAnswer}.`;

      feedback.className = "feedback show incorrect";
    }

    explanationBtn.classList.remove("hidden");

    button.disabled = true;

    input.disabled = true;

    updateProgress();
  });
});

/* ================================
   Explanation Buttons
================================ */

document.querySelectorAll(".explanation-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const explanation = button.nextElementSibling;

    explanation.classList.toggle("show");

    button.textContent = explanation.classList.contains("show")
      ? "Hide Explanation"
      : "View Explanation";
  });
});

/* ================================
   Progress
================================ */

function updateProgress() {
  attemptedDisplay.textContent = attempted;

  correctDisplay.textContent = correct;

  const accuracy =
    attempted === 0 ? 0 : Math.round((correct / attempted) * 100);

  accuracyDisplay.textContent = accuracy + "%";

  progressFill.style.width = (attempted / questionCards.length) * 100 + "%";
}

/* ================================
   Reset
================================ */

resetBtn.addEventListener("click", () => {
  attempted = 0;

  correct = 0;

  questionCards.forEach((card) => {
    const input = card.querySelector(".answer-input");

    const feedback = card.querySelector(".feedback");

    const explanation = card.querySelector(".explanation");

    const explanationBtn = card.querySelector(".explanation-btn");

    const hint = card.querySelector(".hint-box");

    const hintBtn = card.querySelector(".hint-btn");

    const checkBtn = card.querySelector(".check-btn");

    input.value = "";

    input.disabled = false;

    checkBtn.disabled = false;

    feedback.textContent = "";

    feedback.className = "feedback";

    explanation.classList.remove("show");

    explanationBtn.classList.add("hidden");

    explanationBtn.textContent = "View Explanation";

    hint.classList.remove("show");

    hintBtn.textContent = "💡 Show Hint";
  });

  updateProgress();
});
