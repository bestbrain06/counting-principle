document.addEventListener("DOMContentLoaded", () => {
  const assessmentForm = document.getElementById("assessmentForm");

  const resultSection = document.getElementById("resultSection");

  const scoreDisplay = document.getElementById("scoreDisplay");

  const messageDisplay = document.getElementById("messageDisplay");

  // Correct answers

  const answers = {
    q1: "12",

    q2: "20",

    q3: "30",

    q4: "15",

    q5: "12",

    q6: "48",

    q7: "30",

    q8: "80",

    q9: "60",

    q10: "24",
  };

  assessmentForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let score = 0;

    // Loop through every question

    Object.keys(answers).forEach((question) => {
      const options = document.querySelectorAll(`input[name="${question}"]`);

      let selectedAnswer = null;

      options.forEach((option) => {
        const label = option.parentElement;

        // remove old classes

        label.classList.remove("correct", "wrong");

        // Correct answer always becomes green

        if (option.value === answers[question]) {
          label.classList.add("correct");
        }

        // Check selected answer

        if (option.checked) {
          selectedAnswer = option.value;

          if (option.value === answers[question]) {
            score++;
          } else {
            label.classList.add("wrong");
          }
        }

        // Prevent changing answers

        option.disabled = true;
      });
    });

    // Display result

    const percentage = (score / 10) * 100;

    scoreDisplay.textContent = `Your Score: ${score}/10 (${percentage}%)`;

    if (score === 10) {
      messageDisplay.textContent =
        "Excellent! You have mastered the Fundamental Counting Principle.";
    } else if (score >= 7) {
      messageDisplay.textContent =
        "Great work! You have a good understanding of the topic.";
    } else if (score >= 5) {
      messageDisplay.textContent =
        "Good attempt. Review the lesson and keep practicing.";
    } else {
      messageDisplay.textContent =
        "Keep learning. Review the concepts and try again.";
    }

    // Show result section

    resultSection.style.display = "block";

    // Scroll to result

    resultSection.scrollIntoView({
      behavior: "smooth",
    });

    // Remove submit button after submission

    const submitButton = document.querySelector(".submit-btn");

    submitButton.disabled = true;

    submitButton.textContent = "Assessment Submitted";
  });
});
