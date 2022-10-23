function init() {
    const initGame = document.createElement('div');
        initGame.insertAdjacentHTML('afterbegin', `
            <div class="wrapper">
                <h1 class="game-title">Gem Puzzle<span class="speaker"></span></h1>
                <div class="buttons-init">
                    <button type="button" class="btn" id="btn-start">Start</button>
                    <button type="button" class="btn" id="btn-save">Save</button>
                    <button type="button" class="btn" id="btn-result">Results</button>
                    <button type="button" class="btn" id="btn-demo">Demo</button>
                </div>
                <div class="timer">
                    <div class="moves">Moves:</div>
                    <div class="timer__number" id="moves">0</div>
                    <div class="time">Time:</div>
                    <div class="timer__number" id="timer">
                        <span class="minutes">00</span>:<span class="seconds">00</span>
                    </div>
                </div>
                <div class="game-field" id="game-field"></div>
                    <div class="game-size">Frame size:
                    <input class="range-input" type="radio" id="3x3" name="range" value="3"/>
                    <label class="range-label" for="3x3" data-debt-size="3x3"></label>
                    <input class="range-input" type="radio" id="4x4" name="range" value="4" checked/>
                    <label class="range-label" for="4x4" data-debt-size="4x4"></label>
                    <input class="range-input" type="radio" id="5x5" name="range" value="5"/>
                    <label class="range-label" for="5x5" data-debt-size="5x5"></label>
                    <input class="range-input" type="radio" id="6x6" name="range" value="6"/>
                    <label class="range-label" for="6x6" data-debt-size="6x6"></label>
                    <input class="range-input" type="radio" id="7x7" name="range" value="7"/>
                    <label class="range-label" for="7x7" data-debt-size="7x7"></label>
                    <input class="range-input" type="radio" id="8x8" name="range" value="8"/>
                    <label class="range-label" for="8x8" data-debt-size="8x8"></label>
                </div>
                <a href="https://goo.su/XtbUHwt" class="task-link">Codejam 2022Q3</a>
            </div>
        `);
    document.body.append(initGame);
}

init();
