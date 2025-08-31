const increase_btn = document.getElementById('inc');
const decrease_btn = document.getElementById('dec');
const value = document.getElementById('value');
let count = 0;

increase_btn.addEventListener('click',function(){
   count++;
   value.innerText = count;
});
decrease_btn.addEventListener('click',function(){
   count--;
   value.innerText = count;
});