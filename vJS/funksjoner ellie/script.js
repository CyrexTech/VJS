// Model
const app = document.getElementById("app");


// View

function updateView() {
  app.innerHTML = /*HTML*/ `
        <div class="inventoryContainer">
        <div id="layout">
            <div id="item" onclick="moveDiv(this)">Click Me</div>
        </div>
        <div id="hotbar"></div>
        </div>
    `;
}

function moveDiv(element) {
  let box1 = document.getElementById("layout");
  let box2 = document.getElementById("hotbar");

  if (box2.innerHTML === "") box2.innerHTML = element.outerHTML;
  else box1.innerHTML = element.outerHTML;
  element.remove();
}
