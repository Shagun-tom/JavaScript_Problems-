const paragraph = document.getElementById("para");
const button = document.getElementById("btn");

button.addEventListener("click", hideParagraph);

function hideParagraph (){
    paragraph.style.display = "none";
    
}