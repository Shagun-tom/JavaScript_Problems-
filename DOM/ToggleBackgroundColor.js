const btn = document.getElementById("btn");
const body = document.getElementById("body");

btn.addEventListener("click", changeMode);

function changeMode() {
    body.classList.toggle("dark");
}