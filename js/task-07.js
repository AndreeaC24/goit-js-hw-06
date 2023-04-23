const textInput = document.querySelector("#font-size-control");
const output = document.querySelector("#text");
textInput.addEventListener("input", () => {
  const fontSize = textInput.value;
  output.style.fontSize = `${fontSize}px`;
});
