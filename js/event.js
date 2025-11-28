const body = document.body;
const main = body.querySelector("main");
const outerDiv = body.querySelector("main > div");
const middleDiv = body.querySelector("main > div > div");
const insideDiv = body.querySelector("main > div > div > div");
body.addEventListener("click", () => {
  console.log("body");
});
main.addEventListener("click", () => {
  console.log("main");
});
outerDiv.addEventListener("click", () => {
  console.log("outer div");
});
middleDiv.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log("middle div");
  },
  { capture: true }
);
insideDiv.addEventListener("click", (e) => {
  //   e.stopImmediatePropagation();
  //   e.stopPropagation();
  console.log("inside div 1");
});
insideDiv.addEventListener("click", (e) => {
  //   e.stopPropagation();
  e.stopImmediatePropagation();
  console.log("inside div 2");
});
insideDiv.addEventListener("click", (e) => {
  //   e.stopPropagation();
  console.log("inside div 3");
});
