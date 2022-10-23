'use strict';
import './assets/modules/html-build';
import { startTimer, stopTimer, resetTimer, minutes, seconds} from './assets/modules/timer';

const audioClick = new Audio("assets/click.mp3");
const audioSort = new Audio("assets/sort.mp3");
const audioFinish = new Audio("assets/finish.mp3");
const speaker = document.querySelector('.speaker');


const field = document.querySelector('#game-field');
const moves = document.querySelector('#moves');
const start = document.querySelector('#btn-start');

let lineCards = 4;
let countCards = 16;
let cardSize = 25;

let movesCount = 0;

let gameMod = document.querySelectorAll('.range-input');

function createCards() {
    let cards = new Array(countCards).fill(0).map((elem, index) => {
        return index + 1;
    });
    cards.forEach((card, index) => {
        card = document.createElement('div');
        card.id = `${ index + 1 }`;
        card.className = 'card';
        card.innerHTML = index + 1;
        card.style.width = `${cardSize}%`;
        field.append(card);
    });
}
createCards();

function createCardArray() {
    return Array.from(document.querySelectorAll('.card'));
}
let card = createCardArray();
card[countCards - 1].style.display = 'none';

let matrixCards = createMatrix(card.map(item => +item.id));

function createMatrix(array) {
    const matrix = [];
    for (let i = 0; i < lineCards; i++) {
        matrix.push([]);
    }
    let y = 0;
    let x = 0;
    
    for (let i = 0; i < array.length; i++) {
        if (x >= lineCards) {
            y++;
            x = 0;
        }
        matrix[y][x] = array[i];
        x++;
    }
    return matrix;    
}

setPositionCards(matrixCards);

function setPositionCards(matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            const value = matrix[y][x];
            const item = card[value - 1];
            setCardsStyles(item, x, y);
        }
    }
}

function setCardsStyles(item, x, y) {
    item.style.transform = `translate(${x * 100}%, ${y * 100}%)`;
}

let randomCards = sortCards(matrixCards);

function sortCards(matrix) {
    return matrix.flat()
        .sort(() => Math.random() - 0.5);
}

function startGame() {
matrixCards = createMatrix(randomCards);
setPositionCards(matrixCards);

start.addEventListener('click', () => {
    movesCount = 0;
    moves.innerText = movesCount;
    randomCards = sortCards(matrixCards);
    matrixCards = createMatrix(randomCards);
    setPositionCards(matrixCards);

    resetTimer();
    startTimer();

    if (!document.querySelector('.speaker_off')) {
        audioSort.play();
    }
});

card.forEach((elem) => {
    elem.addEventListener('click', () => {
        const cardNumber = +elem.id;
        const emptyCard = Number(card[countCards - 1].id);
        const cardLocation = findLocationCard(cardNumber, matrixCards);
        const emptyCardLocation = findLocationCard(emptyCard, matrixCards);

        const diffAxisX = Math.abs(emptyCardLocation.x - cardLocation.x);
        const diffAxisY = Math.abs(emptyCardLocation.y - cardLocation.y);

        if (diffAxisX + diffAxisY > 1) {
            return;
        }

        move(cardLocation, emptyCardLocation, matrixCards);
        setPositionCards(matrixCards);

        if (isFinished(matrixCards)) {
            setTimeout(() => { 
                popUpWin(); 
                if (!document.querySelector('.speaker_off')) {
                    audioFinish.play();
                }
            }, 300);
        }

        movesCount++;
        moves.innerText = movesCount;

        startTimer();

        if (!document.querySelector('.speaker_off')) {
            audioClick.play();
        }
    });
});

}
startGame();

function findLocationCard(number, matrix) {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] === number) {
                return {x, y};
            }
        }
    }
}

function move(locationOne, locationTwo, matrix) {
    const cardLocationOne = matrix[locationOne.y][locationOne.x];
    matrix[locationOne.y][locationOne.x] = matrix[locationTwo.y][locationTwo.x];
    matrix[locationTwo.y][locationTwo.x] = cardLocationOne;
}


function isFinished(matrix) {
    const winArray = new Array(countCards).fill(0).map((elem, index) => {
        return index + 1;
    });
    
    for (let i = 0; i < winArray.length; i++) {
        if (matrixCards.flat()[i] !== winArray[i]) {
            return false;
        }
    }
    return true;    
}


gameMod.forEach (e => {
    e.addEventListener('click', () => {
        if (e.checked === true) {
            lineCards = +e.value;
            countCards = Math.pow(lineCards, 2);
            cardSize = 100 / lineCards;
            field.innerHTML = '';
            movesCount = 0;
            moves.textContent = `${movesCount}`;
            createCards();
            card = createCardArray();
            card[countCards - 1].style.display = 'none';
            matrixCards = createMatrix(card.map(item => +item.id));
            setPositionCards(matrixCards);
            randomCards = sortCards(matrixCards);
            startGame();
            resetTimer();
            startTimer();
        }
    });
});

function popUpWin() {
    const win = document.createElement('div');
        field.innerHTML = '';
        win.className = 'win';
        win.innerHTML = `«Hooray! You solved the puzzle in ${minutes.innerText}:${seconds.innerText} 
        and ${movesCount} moves!»`;
        field.append(win);
    stopTimer();
}

const demo = document.querySelector('#btn-demo');
demo.addEventListener('click', () => {
        lineCards = 4;
        countCards = 16;
        cardSize = 25;
        field.innerHTML = '';
        movesCount = 0;
        moves.textContent = `${movesCount}`;
        createCards();
        card = createCardArray();
        card[countCards - 1].style.display = 'none';
        matrixCards = createMatrix(card.map(item => +item.id));
        setPositionCards(matrixCards);
        
        randomCards = matrixCards.flat();
        startGame();

        resetTimer();
        startTimer();
});

speaker.addEventListener('click', () => {
    speaker.classList.toggle('speaker_off');
});