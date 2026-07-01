const paragraph = document.getElementById("para");
const button = document.getElementById("btn");

button.addEventListener("click", showHiddenParagraph);

function showHiddenParagraph (){
    paragraph.style.display = "block";
    
}