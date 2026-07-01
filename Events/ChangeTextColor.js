const para = document.getElementById("para");
const btn = document.getElementById("btn");

btn.addEventListener("click", changeColor);

function changeColor(){
    para.style.background = "blue";
    para.style.color = "yellow";
}