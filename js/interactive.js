// Fundamental Counting Principle Interactive Simulator

const generateBtn = document.getElementById("generateBtn");

const resetBtn = document.getElementById("resetBtn");

const categoryOneName = document.getElementById("categoryOneName");

const categoryOneItems = document.getElementById("categoryOneItems");

const categoryTwoName = document.getElementById("categoryTwoName");

const categoryTwoItems = document.getElementById("categoryTwoItems");

const outcomeList = document.getElementById("outcomeList");

const calculationBox = document.getElementById("calculationBox");

// Generate combinations

generateBtn.addEventListener("click", () => {
  const firstName = categoryOneName.value.trim();

  const secondName = categoryTwoName.value.trim();

  const firstItems = categoryOneItems.value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");

  const secondItems = categoryTwoItems.value
    .split(",")
    .map((item) => item.trim())
    .filter((item) => item !== "");

  // Validation

  if (
    firstName === "" ||
    secondName === "" ||
    firstItems.length === 0 ||
    secondItems.length === 0
  ) {
    outcomeList.innerHTML = `
      <p>
      Please enter both categories and their items.
      </p>
    `;

    calculationBox.innerHTML = "";

    return;
  }

  // Generate outcomes

  const outcomes = [];

  firstItems.forEach((firstItem) => {
    secondItems.forEach((secondItem) => {
      outcomes.push(`${firstItem} ${firstName} + ${secondItem} ${secondName}`);
    });
  });

  // Display outcomes

  outcomeList.innerHTML = "";

  outcomes.forEach((outcome) => {
    const card = document.createElement("div");

    card.classList.add("outcome-card");

    card.textContent = outcome;

    outcomeList.appendChild(card);
  });

  // Display mathematical explanation

  calculationBox.innerHTML = `

    Number of ${firstName} choices × 
    Number of ${secondName} choices

    <br><br>

    ${firstItems.length} × ${secondItems.length}

    = ${outcomes.length} possible outcomes

  `;
});

// Reset simulator

resetBtn.addEventListener("click", () => {
  categoryOneName.value = "";

  categoryOneItems.value = "";

  categoryTwoName.value = "";

  categoryTwoItems.value = "";

  outcomeList.innerHTML = `

    <p>
    Your generated combinations will appear here.
    </p>

  `;

  calculationBox.innerHTML = "";
});
