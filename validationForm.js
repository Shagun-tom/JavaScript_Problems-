const myform = document.querySelector('#myform'); 
const myName = document.querySelector('#name'); 
const errormsg = document.querySelector('#errormsg'); 

myform.addEventListener("submit",function(event){
    event.preventDefault();


if (myName.value.trim() === "") {
    errormsg.style.display = "inline";
}else{
    errormsg.style.display = "none";
    alert("Form submitted successfully.")
}

});


