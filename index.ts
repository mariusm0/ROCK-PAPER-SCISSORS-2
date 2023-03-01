
let myScore = 0;
let pcScore = 0;

const rock = document.querySelector('#pirma') as HTMLElement;

const paper = document.querySelector('#antra') as HTMLElement;

const scissors = document.querySelector('#trecia') as HTMLElement;

rock.addEventListener('click', e => {
    e.preventDefault();
    let rand: number = Math.floor((Math.random() * 3) + 1);
    let rsltP = document.querySelector('.rslt1') as HTMLElement;
    let rsltC = document.querySelector('.rslt2') as HTMLElement;
    let output1 = document.querySelector('.output') as HTMLElement;
    let output2 = document.querySelector('.pcSelection') as HTMLElement;
    if (rand === 1) {
        rsltP.textContent = `${myScore}`;
        rsltC.textContent = `${pcScore}`;
        output2.innerText = `PC Selected ROCK`
        output1.innerText = `It's a TIE`
    } else if (rand === 2) {
        pcScore++
        rsltC.textContent = `${pcScore}`;
        output2.innerText = `PC Selected PAPER`
        output1.innerText = `PC WINS`
    } else if (rand === 3) {
        myScore++;
        rsltP.textContent = `${myScore}`;
        output2.innerText = `PC Selected SCISSORS`
        output1.innerText = `You WIN`
    }
    return myScore && pcScore;
})

paper.addEventListener('click', e => {
    e.preventDefault();
    let rand = Math.floor((Math.random() * 3) + 1);
    let rsltP = document.querySelector('.rslt1') as HTMLElement;
    let rsltC = document.querySelector('.rslt2') as HTMLElement;
    let output1 = document.querySelector('.output') as HTMLElement;
    let output2 = document.querySelector('.pcSelection') as HTMLElement;
    if (rand === 1) {
        myScore++;
        rsltP.textContent = `${myScore}`;
        output2.innerText = `PC Selected ROCK`
        output1.innerText = `You WIN`
    } else if (rand === 2) {
        rsltP.textContent = `${myScore}`;
        rsltC.textContent = `${pcScore}`;
        output2.innerText = `PC Selected PAPER`
        output1.innerText = `It's a TIE`
    } else if (rand === 3) {
        pcScore++;
        rsltC.textContent = `${pcScore}`;
        output2.innerText = `PC Selected SCISSORS`
        output1.innerText = `PC WINS`
    }
    return myScore && pcScore;
})

scissors.addEventListener('click', e => {
    e.preventDefault();
    let rand = Math.floor((Math.random() * 3) + 1);
    let rsltP = document.querySelector('.rslt1') as HTMLElement;
    let rsltC = document.querySelector('.rslt2') as HTMLElement;
    let output1 = document.querySelector('.output') as HTMLElement;
    let output2 = document.querySelector('.pcSelection') as HTMLElement;
    if (rand === 1) {
        pcScore++;
        rsltC.textContent = `${pcScore}`;
        output2.innerText = `PC Selected ROCK`
        output1.innerText = `PC WINS`
    } else if (rand === 2) {
        myScore++
        rsltP.textContent = `${myScore}`;
        output2.innerText = `PC Selected PAPER`
        output1.innerText = `You WIN`
    } else if (rand === 3) {
        rsltP.textContent = `${myScore}`;
        rsltC.textContent = `${pcScore}`;
        output2.innerText = `PC Selected SCISSORS`
        output1.innerText = `It's a TIE`
    }
    return myScore && pcScore;
})



