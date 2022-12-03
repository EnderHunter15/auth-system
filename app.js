import fakedb from "./data/fakedb.json" assert { type: "json" };

console.log(fakedb); // fake database users

function swapForm() {
  document.querySelector(".loginW").classList.toggle("active");
  document.querySelector(".registerW").classList.toggle("active");
}

document
  .querySelectorAll(".swap")
  .forEach((element) => element.addEventListener("click", swapForm));
