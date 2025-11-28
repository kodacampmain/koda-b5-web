const form = document.querySelector("main > form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = {};
  //   const fileInput = e.target.querySelector('input[type="file"]');
  const inputs = e.target.querySelectorAll("input");
  inputs.forEach((input) => {
    if (input.type === "file") {
      const file = input.files[0];
      Object.assign(userInput, { [input.name]: file });
      return;
    }
    if (input.type === "radio") {
      if (input.checked) {
        Object.assign(userInput, { [input.name]: input.value });
      }
      return;
    }
    if (input.type === "checkbox") {
      const label = input.parentElement.parentElement.querySelector("label");
      if (!userInput[label.textContent]) {
        Object.assign(userInput, { [label.textContent]: [] });
      }
      if (input.checked) {
        userInput[label.textContent].push(input.name);
      }
      return;
    }
    // handling type email, number, text, password
    Object.assign(userInput, { [input.name]: input.value });
  });
  const selects = e.target.querySelectorAll("select");
  selects.forEach((select) => {
    Object.assign(userInput, { [select.name]: select.value });
  });
  console.log(userInput);
  const key = "input";
  let old = localStorage.getItem(key);
  if (!old) {
    old = [];
  } else {
    old = JSON.parse(old);
  }
  old.push(userInput);
  localStorage.setItem(key, JSON.stringify(old));
});
