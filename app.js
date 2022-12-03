import fakedb from "./data/fakedb.json" assert {type: "json"};

console.log(fakedb); // fake database users

function swapForm() {
  document.querySelector(".loginW").classList.toggle("active");
  document.querySelector(".registerW").classList.toggle("active");
}

function goToLogin() {
  document.querySelector(".loginW").classList.add("active");
  document.querySelector(".registerW").classList.remove("active");
}

function goToRegister() {
  document.querySelector(".registerW").classList.add("active");
  document.querySelector(".loginW").classList.remove("active");
}

document
  .querySelectorAll(".swap")
  .forEach((element) => element.addEventListener("click", swapForm));

document.querySelector(".go_to_login").addEventListener("click", () => {
  goToLogin();
});

document.querySelector(".go_to_register").addEventListener("click", () => {
  goToRegister();
});
