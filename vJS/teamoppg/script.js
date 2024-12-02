

function moveDiv(element) {
    let box1 = document.getElementById("container1");
    let box2 = document.getElementById("container2");
  
    if (box2.innerHTML === "") box2.innerHTML = element.outerHTML;
    else box1.innerHTML = element.outerHTML;
    element.remove();
  }