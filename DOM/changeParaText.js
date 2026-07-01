const btn = document.getElementById("btn");
const para = document.getElementById("para");


btn.addEventListener("click", changeText);

function changeText() {
    para.innerText = "Good Afternoon";
}

// function changeText(event) {
//     event.target.innerText = "Clicked";
// }

