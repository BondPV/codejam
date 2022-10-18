'use strict';

init();

function init() {
    const initGame = document.createElement('div');
        initGame.insertAdjacentHTML('afterbegin', `
            <div class="wrapper">
                <h1 class="game-title">Gem Puzzle</h1>
                <div class="buttons-init">
                    <button type="button" class="btn" id="btn-start">Shuffle and start</button>
                    <button type="button" class="btn" id="btn-sbottom">Sbottom</button>
                    <button type="button" class="btn" id="btn-save">Save</button>
                    <button type="button" class="btn" id="btn-result">Results</button>
                </div>
                <div class="timer">
                    <div class="moves">Moves:</div>
                    <div class="timer__number" id="moves"></div>
                    <div class="time">Time:</div>
                    <div class="timer__number" id="time">00:00</div>
                </div>
                <div class="game-field" id="game-field"></div>
                <div class="frame-game">Frame size:
                    <div id="current-game"></div>
                </div>
                <ul class="other-sizes">Other sizes:
                    <li class="other-sizes__size" id="game-1">3x3</li>
                    <li class="other-sizes__size" id="4x4">4x4</li>
                    <li class="other-sizes__size" id="5x5">5x5</li>
                    <li class="other-sizes__size" id="6x6">6x6</li>
                    <li class="other-sizes__size" id="7x7">7x7</li>
                    <li class="other-sizes__size" id="8x8">8x8</li>
                </ul>
                <a href="https://goo.su/XtbUHwt" class="task-link">Codejam 2022Q3</a>
            </div>
        `);
    document.body.append(initGame);
}

const field = document.querySelector('#game-field');
const moves = document.querySelector('#moves');
const start = document.querySelector('#btn-start');

let lineCards = 4;

let countCards = Math.pow(lineCards, 2);
let cardSize = 100 / lineCards;

const emptyCard = {
    value: 0,
    bottom: 0,
    right: 0,
};

const cards = [];
cards.push(emptyCard);

function move(index) {
    const card = cards[index];
    const rightDiff = Math.abs(emptyCard.right - card.right); // расстояние по горизонтали
    const bottomDiff = Math.abs(emptyCard.bottom - card.bottom); // расстояние по вертикали

    if (rightDiff + bottomDiff > 1) {
        return;
    }

    card.element.style.right = `${emptyCard.right * cardSize}%`;
    card.element.style.bottom = `${emptyCard.bottom * cardSize}%`;

    const emptyCardright = emptyCard.right;
    const emptyCardbottom = emptyCard.bottom;

    emptyCard.right = card.right;
    emptyCard.bottom = card.bottom;
    card.right = emptyCardright;
    card.bottom = emptyCardbottom;

    const isFinished = cards.every(card => {
        return card.value === card.bottom * lineCards + card.right;
    });

    if (isFinished) {
        alert('You win');
    }
}

const numbers = [...Array(countCards - 1).keys()]
    //.sort(() => Math.random() - 0.5);

for (let i = 1; i < countCards; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    const value = numbers[i - 1] + 1;
    card.innerHTML = value;
    card.style.width = `${cardSize}%`;

    const right = i % lineCards; // позиция ячейки слева
    const bottom = (i - right) / lineCards; // позиция сверху

    cards.push({
        value: value,
        right: right,
        bottom: bottom,
        element: card,
    });

    card.style.right = `${right * cardSize}%`;
    card.style.bottom = `${bottom * cardSize}%`;


    field.append(card);

    card.addEventListener('click', () => {
        move(i);
    });
}


// start.addEventListener('click', () => {
//     startGame();
// });






