const btn = document.querySelector('#btn');
btn.addEventListener('click',function(){
    btn.innerText = 'Clicked';
    btn.classList.add('change');
});