var login = document.getElementById("login").innerText;
var signUp = document.getElementById("signup").innerText;

var home = sessionStorage.setItem("key1", login);
var save = sessionStorage.setItem("key2", signUp);

console.log(sessionStorage.getItem("key1"));