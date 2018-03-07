import app from './model';
import  generateGame  from './generateGame';
import {changeViewToPlayGame,changeViewToCreateGame,swapStartToStopBtn,swapStopToStartBtn} from './views';
import stopCurrentGame from './stopGame';
import startGame from './startGame';

// Generate game
(function () {
    const form = document.getElementById('form');
    const errDiv = document.createElement('h5');
    errDiv.classList.add('errMsg');
    form.addEventListener('submit', e => {
        e.preventDefault();
        try {
            generateGame(document, window.app.model);
            changeViewToPlayGame();
            if(form.lastChild == errDiv) {
                form.removeChild(errDiv);
            }
        } catch (err) {
            console.log(err)
            errDiv.innerHTML = `Error\n${err.message}`;
            form.appendChild(errDiv);
        }
    })
})();
// Exit game
(function () {
    const exitGame = document.getElementById('exit-game');
    const startNewGame = document.getElementById('start-new-game');
    exitGame.addEventListener('click', () => {
        try {
            stopCurrentGame(document, window.app.model)
            changeViewToCreateGame()
            startNewGame.style.display = 'none';

        } catch (err) {
            console.log(err)

        }
    })
})();

// Start game
(function () {
    const startGameBtn = document.getElementById('start-game');
    
    startGameBtn.addEventListener('click', () => {
        try {
            swapStartToStopBtn(document);
            startGame(document, window.app.model);
            console.log(window.app.model);

        } catch (err) {
            console.log(err);
        }
    })
})();
//Stop Game
(function () {
    const stopGameBtn = document.getElementById('stop-game');
    stopGameBtn.addEventListener('click', () => {
        try {
            swapStopToStartBtn(document);
            stopCurrentGame(document, window.app.model);
            console.log(window.app.model);

        } catch (err) {
            console.log(err);

        }
    })
})();

//start new game
(function (){
    const startNewGame = document.getElementById('start-new-game');
    startNewGame.addEventListener('click', () => {
        try {
            stopCurrentGame(document, window.app.model);
            changeViewToCreateGame();
            startNewGame.style.display = 'none';
         
        } catch (err){
            console.log(err);
        }
    
    })
})();