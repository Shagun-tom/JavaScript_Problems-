const ol = document.getElementById('ordlst');
const abtn = document.getElementById('add');
const dbtn = document.getElementById('del');

abtn.addEventListener('click',function(){
    
    const task = prompt('Enter your task');
    if(!task) return;
    const li = document.createElement('ol');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    const lable = document.createElement('lable');
    lable.innerText = task;
    ol.append(li);
    ol.append(checkbox);
    ol.append(lable);
    
});
dbtn.addEventListener('click', function () {
  const last = ol.lastElementChild;
  if (last) {
    last.remove(); 
    ol.lastElementChild.remove();
  }
});
