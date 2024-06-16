// //this is for first btn
// const firstBtn = document.getElementById('first');
// firstBtn.addEventListener('click', function(){
//     const content = document.getElementById('first1');
//     content.style.display = 'block';
//     const content1 = document.getElementById('first2');
//     content1.style.display = 'none';
//     const content3 = document.getElementById('first3');
//     content3.style.display = 'none';
// })

// //this is for second btn
// const firstBtn1 = document.getElementById('second');
// firstBtn1.addEventListener('click', function(){
//     const content = document.getElementById('first2');
//     content.style.display = 'block';
//     const content1 = document.getElementById('first1');
//     content1.style.display = 'none';
//     const content3 = document.getElementById('first3');
//     content3.style.display = 'none';
    
// })
// //this is for Third btn
// const firstBtn3 = document.getElementById('third');
// firstBtn3.addEventListener('click', function(){
//     const content = document.getElementById('first2');
//     content.style.display = 'none';
//     const content1 = document.getElementById('first1');
//     content1.style.display = 'none';
//     const content3 = document.getElementById('first3');
//     content3.style.display = 'block';
    
// })


function clickBtnItemFunc(btnId, showID, hideID1, hideID2){
    document.getElementById(btnId).addEventListener('click', function(){
        document.getElementById(showID).style.display = 'block';
        document.getElementById(hideID1).style.display = 'none';
        document.getElementById(hideID2).style.display = 'none';
    })
}

clickBtnItemFunc('first', 'first1','first2', 'first3');
clickBtnItemFunc('second', 'first2','first1', 'first3');
clickBtnItemFunc('third', 'first3','first2', 'first31 ');


// This is for close

const closeFunc = document.getElementById('close1');
closeFunc.addEventListener('click', function(){
    const contentClose = document.getElementById('first1');
    contentClose.style.display = 'none';
})
const closeFunc1 = document.getElementById('close2');
closeFunc1.addEventListener('click', function(){
    const contentClose = document.getElementById('first2');
    contentClose.style.display = 'none';
})
const closeFunc2 = document.getElementById('close3');
closeFunc2.addEventListener('click', function(){
    const contentClose = document.getElementById('first3');
    contentClose.style.display = 'none';
})