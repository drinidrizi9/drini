let num = document.getElementById('number');
let startBtn = document.getElementById('startCountingBtn');
let stopBtn = document.getElementById('stopCountingBtn');
let resetBtn = document.getElementById('resetBtn');

let count = 0;

let startTheCount = () => {
    count = count + 1;
    return count
}

let stopTheCount = () => {
    count = 0;
    return count
}

let checkNum = () => {
    count = count;
    if(count >= 1) {
        startBtn.disabled = true;
        startBtn.style.backgroundColor = 'rgb(236, 236, 236)';
        startBtn.style.color = 'rgb(131, 131, 131)';
    } else if(count === 0 || count === '0'){
        startBtn.disabled = false;
        startBtn.style.backgroundColor = 'rgb(233, 233, 233)';
        startBtn.style.color = '#292929';
    }
}

startBtn.addEventListener('click', () => {
    let interval1 = setInterval(() => {
        num.textContent = startTheCount();
    }, 1000);
    stopBtn.addEventListener('click', () => {
        clearInterval(interval1);
    })
    resetBtn.addEventListener('click', () => {
        clearInterval(interval1);
        num.textContent = 0;
        count = 0;
    })
})

let interval2 = setInterval(() => {
    for (let i = 0; i < 1; i++) {
        checkNum()
    }
}, 950);
