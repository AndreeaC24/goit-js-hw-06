const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementrBtn = document.querySelector('[data-action="decrement"]');
let counterValue = 0;

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  document.getElementById("value").innerHTML = counterValue;
});

decrementrBtn.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue -= 1;
    document.getElementById("value").innerHTML = counterValue;
  }
});
