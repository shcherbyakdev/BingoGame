import {swapStopToStartNewGameBtn} from './views'

const endGame = (document, model) => {
    if(model.gameContinueInterval) {
        clearInterval(model.gameContinueInterval);
    }

    swapStopToStartNewGameBtn(document);
}
export default endGame;