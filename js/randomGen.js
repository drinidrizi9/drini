let colorBox = document.getElementById('colorBox');
let btn1 = document.getElementById('boxBtn1');
let btn2 = document.getElementById('boxBtn2');
let num = document.getElementById('randomNumber');

btn1.addEventListener('click', () => {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    colorBox.style.backgroundColor = '#' + randomColor;
})

btn2.addEventListener('click', () => {
    let randomNum = Math.floor(Math.random()* 100000);
    num.textContent = randomNum;
})