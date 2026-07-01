const btn = document.getElementById("btn");
const profile = document.getElementById("profile");
const bio = document.getElementById("bio");
const name = document.getElementById("name");


btn.addEventListener("click", change);
let isChanged  = false;

function change(){
    profile.classList.toggle("container");
    bio.classList.toggle("changeColor");
    name.classList.toggle("changeColor");
    if (!isChanged ) {
        btn.innerText = "Clicked!";
        name.innerText = "Shagun Tomar";
        bio.innerText = "This is my Bio";
        isChanged  = true;
    } else {
        btn.innerText = "Click Me!";
        name.innerText = "Shagun";
        bio.innerText = "I am a B.Tech CSE second-year student who is passionate about problem-solving and technology. I enjoy learning new things, exploring creative ideas, and developing skills in the tech field.";
        isChanged  = false;
    }
}