let row1 = document.querySelector('.row1');
let row2 = document.querySelector('.row2');
let leftarrow = document.getElementById('leftarrow');
let rightarrow = document.getElementById('rightarrow');
leftarrow.style.opacity = '0';

rightarrow.addEventListener('click', () => {
    row1.style.transform = 'translateY(-300px)';
    row1.style.opacity = '0';
    rightarrow.style.opacity = '0';
    let timeout = setTimeout(() => {
        row2.style.transform = 'translateY(0px)';
        row2.style.opacity = '1';
        leftarrow.style.opacity = '1';
    }, 500);
})

leftarrow.addEventListener('click', () => {
    row2.style.transform = 'translateY(300px)';
    row2.style.opacity = '0';
    leftarrow.style.opacity = '0';
    let timeout = setTimeout(() => {
        row1.style.transform = 'translateY(0px)';
        row1.style.opacity = '1';  
        rightarrow.style.opacity = '1';
    }, 500);
})