// Controls interactive elements on the lesson page.

const solutionButtons = document.querySelectorAll(".solution-btn");

solutionButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const solution = button.nextElementSibling;

    solution.classList.toggle("show");

    if (solution.classList.contains("show")) {
      button.textContent = "Hide Solution";
    } else {
      button.textContent = "Show Solution";
    }
  });
});
