const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
});

textInput.addEventListener("input", (event) => {
  if (event.currentTarget.value !== "") {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = "Anonymous";
  }
});
