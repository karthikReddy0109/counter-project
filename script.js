let counterEl = document.getElementById("counter");
let incBtnEl = document.getElementById("incrementBtn");
let decBtnEl = document.getElementById("decrementBtn");

let currentCount = parseInt(counterEl.textContent);
incBtnEl.onclick = function () {
  currentCount += 1;
  counterEl.textContent = currentCount;
  //   console.log(typeof currentCount);
};

decBtnEl.onclick = function () {
  if (currentCount > 0) {
    currentCount -= 1;
  }
  counterEl.textContent = currentCount;
};
