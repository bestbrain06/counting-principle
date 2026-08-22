// Fundamental Counting Principle Interactive Simulator

const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");

const categoryOneName = document.getElementById("categoryOneName");
const categoryOneItems = document.getElementById("categoryOneItems");

const categoryTwoName = document.getElementById("categoryTwoName");
const categoryTwoItems = document.getElementById("categoryTwoItems");

const outcomeList = document.getElementById("outcomeList");
const calculationBox = document.getElementById("calculationBox");

// Reflection elements
const discoveryText = document.getElementById("discoveryText");
const discoveryExample = document.getElementById("discoveryExample");

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
    outcomeList.innerHTML =
      "<p>Please enter both categories and their items.</p>";

    calculationBox.innerHTML = "";

    discoveryText.textContent =
      "Complete both categories before generating outcomes.";

    discoveryExample.textContent = "Waiting for your calculation...";

    return;
  }

  // Generate combinations
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
    card.className = "outcome-card";
    card.textContent = outcome;
    outcomeList.appendChild(card);
  });

  // Calculation box
  calculationBox.innerHTML = `
    <strong>Fundamental Counting Principle</strong><br><br>

    Number of ${firstName} choices × Number of ${secondName} choices

    <br><br>

    <strong>${firstItems.length} × ${secondItems.length} = ${outcomes.length}</strong>
  `;

  // Dynamic discovery section
  discoveryText.textContent = `You discovered that ${firstItems.length} ${firstName} choices combined with ${secondItems.length} ${secondName} choices produce ${outcomes.length} different outcomes.`;

  discoveryExample.innerHTML = `
    ${firstItems.length} × ${secondItems.length} = <strong>${outcomes.length}</strong>

    <br><br>

    Therefore, there are <strong>${outcomes.length}</strong> possible outcomes.
  `;
});

// Reset
resetBtn.addEventListener("click", () => {
  categoryOneName.value = "";
  categoryOneItems.value = "";
  categoryTwoName.value = "";
  categoryTwoItems.value = "";

  outcomeList.innerHTML =
    "<p>Your generated combinations will appear here.</p>";

  calculationBox.innerHTML = "";

  discoveryText.textContent =
    "Try creating your own counting problem above and click Generate Outcomes.";

  discoveryExample.textContent = "Your calculation will appear here.";
});
