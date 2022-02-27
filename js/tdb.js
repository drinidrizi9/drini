let input = document.getElementById('name');
let p = document.getElementById('paragraph1');
let btn = document.getElementById('btn1');

let db = [];

let getInfo = () => {
    if(input.value === ''){ 
        console.log('input is empty')
        return;
    } else {
        db.push(input.value)
    }
}

btn.addEventListener('click', () => {
    getInfo();
    if (db.length == 0) {
        errorPop();
        p.innerHTML = `You have no Objects in your Array at the moment. Add some by typing in the input field.`;
        p.style.color = 'red';
        p.classList.add('empty');
        let timeout = setTimeout(() => {
            p.classList.remove('empty');
        }, 300);
        let timeout2 = setTimeout(() => {
            p.style.color = 'black'
        }, 1500);
    } else if (db.length >= 1){
        p.innerHTML = `Your objects are: ${db.join(', ')}`;
        p.style.color = 'black';
        if(input.value === '') {
            errorPop2();
            p.innerHTML = `You can'nt submit an empty input field.`;
            p.style.color = 'red';
            p.classList.add('empty');
            let timeout = setTimeout(() => {
                p.classList.remove('empty');
            }, 300);
            let timeout2 = setTimeout(() => {
                p.style.color = 'black'
                p.innerHTML = `Your objects are: ${db.join(', ')}`;
            }, 1500);
        }
    }
})

let errorPop = () => {
    let errorTab = document.getElementById('error');
    errorTab.style.transform = 'translateY(-80px)';
    errorTab.style.opacity = 1;
    let timeout3 = setTimeout(() => {
        errorTab.style.transform = 'translateY(-100px)';
        errorTab.style.opacity = 0;
    }, 1500);
}

let errorPop2 = () => {
    let errorText = document.getElementById('paragraph2')
    errorText.textContent = 'Please enter an Object before sumbiting it.'
    let errorTab = document.getElementById('error');
    errorTab.style.transform = 'translateY(-80px)';
    errorTab.style.opacity = 1;
    let timeout3 = setTimeout(() => {
        errorTab.style.transform = 'translateY(-100px)';
        errorTab.style.opacity = 0;
    }, 1500);
}