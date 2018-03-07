import {createRandomArray,playRound} from './helpers'


const startGame = (document, model) => {
    const playGamePage = document.getElementById('random-numbers-container');
    const msgField = document.getElementById('msg');
    playGamePage.style.display = 'block';
    msgField.style.display = 'block';
    model.numbersArray = createRandomArray(model);
    model.gameContinueInterval = setInterval(playRound, 2000);
}


export default startGame;





