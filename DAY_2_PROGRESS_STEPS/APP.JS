const progress = document.getElementById("progress");
const previewButton = document.getElementById("preview");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

nextButton.addEventListener("click", () => {
  currentActive++;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});

previewButton.addEventListener("click", () => {
  currentActive--;

  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    if (index < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  progress.style.width = ((actives.length - 1) / circles.length) * 100 + "%";

  if (currentActive === 1) {
    previewButton.disabled = true;
  } else if (currentActive === circles.length) {
    nextButton.disabled = true;
  } else {
    previewButton.disabled = false;
    nextButton.disabled = false;
  }
};
