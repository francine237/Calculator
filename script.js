//call out parameters from HTML

const firstDisplay = document.querySelector(".div1");
const secondDisplay = document.querySelector(".div2");
const results = document.querySelectorAll("button");

console.log(firstDisplay, secondDisplay, results);
//add event listeners

results.forEach((key) => {
  key.addEventListener("click", calculate);
});

function calculate() {
  let buttonDisplay = this.innerText;

  if (buttonDisplay === "AC") {
    firstDisplay.innerText = "";
    secondDisplay.innerText = "0";
    return;
  }

  if (buttonDisplay === "DEL") {
    firstDisplay.textContent = firstDisplay.textContent.slice(0, -1);
    // firstDisplay.textContent= firstDisplay.textContent.substr(0, firstDisplay.textContent.length-1);
    return;
  }

  if (buttonDisplay === "=") {
    secondDisplay.innerText = eval(firstDisplay.innerText);
  } else {
    firstDisplay.textContent += buttonDisplay;
  }
}
