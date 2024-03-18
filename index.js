//this is for first btn
const firstBtn = document.getElementById('first');
firstBtn.addEventListener('click', function(){
    const content = document.getElementById('first1');
    content.style.display = 'block';
    const content1 = document.getElementById('first2');
    content1.style.display = 'none';
    const content3 = document.getElementById('first3');
    content3.style.display = 'none';
})

//this is for second btn
const firstBtn1 = document.getElementById('second');
firstBtn1.addEventListener('click', function(){
    const content = document.getElementById('first2');
    content.style.display = 'block';
    const content1 = document.getElementById('first1');
    content1.style.display = 'none';
    const content3 = document.getElementById('first3');
    content3.style.display = 'none';
    
})
//this is for Third btn
const firstBtn3 = document.getElementById('third');
firstBtn3.addEventListener('click', function(){
    const content = document.getElementById('first2');
    content.style.display = 'none';
    const content1 = document.getElementById('first1');
    content1.style.display = 'none';
    const content3 = document.getElementById('first3');
    content3.style.display = 'block';
    
})
