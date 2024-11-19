// Model
const app = document.getElementById("app");
let counter = 0;
let timer = 15;

// View

function updateView() {
  app.innerHTML = /*HTML*/ `
        <div class="containers">
            ${drawView()}
            ${returnNumbers()}
        </div>
        <div class="containers">
            <br>
            <h2>Her har vi en counter, funksjonen som endrer denne er en "Controller" funksjon.</h2>
            <h3><strong>${counter}</strong></h3>
            <button class="buttons" onclick="counterFunction()">Trøkk på meg!</button>
        </div>
        <div class="inventoryContainer">
        <div id="container1">
            <div id="item" onclick="moveDiv(this)">Click Me</div>
        </div>
        <div id="container2"></div>
        </div>
    `;
}

function drawView() {
  let html = /*HTML*/ `
    <div>
        <h1>Funksjoner med returverdi!</h1>
        <p>Funksjoner med returverdi kan brukes til mye forskjellig, blant annet å bygge opp HTML</p>
        <p>Vi kan også gjøre mye mer, vi kan også returnere andre variabler.</p>
    </div>
    <p><strong>Her returnerer vi flere variabler og strenger:</strong></p>

    <p>Time left: ${timer}</p>
    <button onclick="decreaseTimer()">Start Timer</button>
    <br>
    <br>
    `;

  return html;
}

function returnNumbers() {
  let num1 = 7;
  let num2 = 14;
  let sum = num1 + num2;

  return num1 + "+" + num2 + "=" + sum;
}

function moveDiv(element) {
  let box1 = document.getElementById("container1");
  let box2 = document.getElementById("container2");

  if (box2.innerHTML === "") box2.innerHTML = element.outerHTML;
  else box1.innerHTML = element.outerHTML;
  element.remove();
}

// Controller
function counterFunction() {
  counter++;
  updateView();
}

function decreaseTimer() {
  let countdown = setInterval(() => {
  if(timer <= 1) {
    clearInterval(countdown);
  }
    timer--;
    updateView();
  }, 1000);
  if(timer <= 1) timer = 15;
updateView();
}

