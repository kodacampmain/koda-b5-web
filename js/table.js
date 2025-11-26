// console.log("Hello World");

// document.getElementById
// const title = document.getElementById("title");
// console.log(title.textContent);
// console.log(title.innerText);
// title.innerText = "Library Books";

const adit = document.getElementById("tabel");
// const judul = adit.getElementsByClassName("title");
// console.log(judul);

const titles = document.getElementsByClassName("title");
// console.log(titles);

titles[0].innerHTML = "<strong>Simple Table</strong>";
// titles[1].textContent = "Library Books";

titles[0].style.color = "blue";
// titles[1].setAttribute("style", "font-style:italic");

titles[0].className += " judul";
// titles[1].classList.add("judul");

const firstTitle = document.querySelector("caption.title.judul");
// console.log(firstTitle);

const juduls = document.querySelectorAll(".title");
// console.log(juduls);

// const secondTitle = adit.querySelector("caption.title.judul");
// console.log(secondTitle);

const titleSatu = document.querySelector("article:nth-of-type(1) caption.title");
// const titleDua = document.querySelector("article:nth-of-type(2) caption.title");
// console.log(titleSatu);
// console.log(titleDua);

const form = document.querySelector("main > form:nth-child(1)");
// form.onsubmit = function (event) {
//   event.preventDefault();
//   console.log("Hello");
// };
function submitListener(event) {
  event.preventDefault();
  const myForm = event.target;
  // console.log(form);
  // console.log(myForm);
  // const userInput = myForm.querySelector("#username");
  const inputs = myForm.querySelectorAll('input:not([type="checkbox"])');
  let error = false;
  inputs.forEach((input) => {
    // console.log(input);
    // if (input.type === "file") {
    //   const file = input.files[0];
    //   console.log(window.btoa(file));
    // }
    if (input.value === "") {
      error = true;
      console.log(`${input.name} tidak boleh kosong`);
    }
    const encode = window.btoa(input.value);
    const decode = window.atob(encode);
    console.log(input.value, encode, decode);
    input.value = "";
  });
  if (!error) {
    // navigation
    window.location.href = "/index.html";
    // redirect
    // window.location.replace("/index.html");
  }
  // const userInput = myForm.username;
  // const pwdInput = myForm.pwd;
  // const pwdInput = myForm.querySelector("#pwd");
  // console.log(userInput.value);
  // console.log(pwdInput.value);
  // userInput.value = "";
  // pwdInput.value = "";
}
form.addEventListener("submit", submitListener);

const showPwdToggle = document.querySelector("#show");
showPwdToggle.addEventListener("change", (event) => {
  const isPasswordShown = event.target.checked;
  const pwdInput = document.querySelector("#pwd");
  if (isPasswordShown) {
    pwdInput.setAttribute("type", "text");
    return;
  }
  pwdInput.setAttribute("type", "password");
  //   if (pwdInput.getAttribute("type") === "text") {
  //     pwdInput.setAttribute("type", "password");
  //     return;
  //   }
  //   pwdInput.setAttribute("type", "text");
});

const removeListener = document.querySelector('form > button[type="button"]:nth-of-type(3)');
removeListener.onclick = function () {
  const form = document.querySelector("main > form:nth-child(1)");
  form.removeEventListener("submit", submitListener);
};

const addListener = document.querySelector('form > button[type="button"]:nth-of-type(2)');
addListener.addEventListener("click", function (event) {
  event.target.parentElement.addEventListener("submit", submitListener);
});

const fakeSubmit = document.querySelector('form > button[type="button"]:nth-of-type(4)');
fakeSubmit.addEventListener("click", function (event) {
  event.target.parentElement.dispatchEvent(new Event("submit"));
});

document.addEventListener("DOMContentLoaded", function (event) {
  const isPasswordShown = document.querySelector("#show").checked;
  const pwdInput = document.querySelector("#pwd");
  if (isPasswordShown) {
    pwdInput.setAttribute("type", "text");
  }
});

function insertNewRowToSimpleTable(profile) {
  // const simpleTable = document.querySelector("#simple-table");
  // const bodyTable = simpleTable.querySelector("tbody");
  const bodySimpleTable = document.querySelector("#simple-table > tbody");

  // create element
  const row = document.createElement("tr");
  const name = document.createElement("td");
  name.textContent = profile.name;
  name.style.color = "blue";
  const age = document.createElement("td");
  age.textContent = profile.age;
  age.style.textDecoration = "line-through";
  const city = document.createElement("td");
  city.textContent = profile.city;
  city.style.fontWeight = "800";
  row.append(name, age, city);
  bodySimpleTable.append(row);
  //   const target = document.querySelector(`#simple-table > tbody > tr:nth-child(${position})`);
  //   target.insertAdjacentElement("afterend", row);
}

insertNewRowToSimpleTable({ name: "Budi Siregar", age: 14, city: "Medan" });

const arnia = document.querySelector("#simple-table > tbody > tr:nth-child(2)");
arnia.parentNode.removeChild(arnia);
// arnia.parentElement.remove();
// arnia.remove()

// arnia.insertAdjacentElement()
// beforebegin => sebelum dari elemen
// afterbegin => prepend
// beforeend => append
// afterend => setelah elemen
