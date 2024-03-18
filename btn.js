const firstBtn = document.getElementById('first');
firstBtn.addEventListener('click', displayBlock(first1))



function displayBlock(id) {
   const displayContent = document.getElementById(id);
   displayContent.style.display = 'block';
}