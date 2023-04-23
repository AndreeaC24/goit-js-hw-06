const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  const objForm = {};

  for (let key in event.currentTarget.elements) {
    if (event.currentTarget.elements.hasOwnProperty(key)) {
      const element = event.currentTarget.elements[key];
      if (element.type !== "submit") {
        objForm[element.name] = element.value;
      }
    }
  }
  console.log(objForm);
  event.currentTarget.reset();
}
