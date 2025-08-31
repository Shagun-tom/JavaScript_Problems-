document.addEventListener('DOMContentLoaded',function(){
const body = document.querySelector("body");
const ul = document.querySelector("ul");
const abtn = document.querySelector("#add");
const rbtn = document.querySelector("#rmv");
const btn = document.querySelector("#mode");

abtn.addEventListener('click',function(){
const list = document.createElement("li");
list.innerText = prompt("Enter Greet");
ul.append(list);
    });

rbtn.addEventListener('click', function(){
const last = ul.lastElementChild;
if(last)
  last.remove();
})    

btn.addEventListener('click',function(){
    body.classList.toggle('highlight');
});

  });
