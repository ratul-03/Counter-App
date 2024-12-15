// Selecting ID's
const decreament = document.getElementById("decreament");
const increament = document.getElementById("increament");
const reset = document.getElementById("reset");
const mainTitle = document.querySelector(".title");
// Most Important varriable
let curValue = 0;

// Main Logic
// Increament Number
increament.addEventListener("click", () => {
  curValue++;
  mainTitle.textContent = curValue;
})

// Decreament Number
decreament.addEventListener("click", () => {
  curValue--;
  mainTitle.textContent = curValue;
})

// Reset All
reset.addEventListener("click", () => {
  curValue = 0;
  mainTitle.textContent = curValue;
})