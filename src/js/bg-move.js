const floatingDiv = document.getElementById("floating");

const movementFactor = 0.005;

const movementDelay = 50;

document.addEventListener("mousemove", moveFloatingDiv);

function moveFloatingDiv(event) {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const newLeft = mouseX * movementFactor;
  const newTop = mouseY * movementFactor;

  setTimeout(() => {
    floatingDiv.style.left = newLeft + "rem";
    floatingDiv.style.top = newTop + "rem";
  }, movementDelay);
}