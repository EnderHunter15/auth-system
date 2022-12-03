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

document.querySelector(".login_button").addEventListener("click", login);

function login() {
  const email = document.getElementById("login_email").value;
  const pass = document.getElementById("login_password").value;
  const exists = fakedb.find((user) => user.username === email && user.password === pass);
  if (exists) {
    window.alert("OK");
  } else {
    window.alert("bad bad boi");
  }
}

document.querySelector(".register_button").addEventListener("click", register);

function register() {
  const email = document.getElementById("register_email").value;
  const pass = document.getElementById("register_password").value;
  const exists = fakedb.find((item) => item.username === email && item.password === pass);
  if (exists) {
    window.alert("Email already taken");
  } else {
    fakedb.push({username: email, password: pass});
    window.alert("Ochei");
    console.log(fakedb);
  }
}
