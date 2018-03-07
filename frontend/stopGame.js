import {updateRoundCount,clearRandomNumber,clearPaintedNumbers,clearMsg} from './helpers'


const stopCurrentGame = (document, model) => {
    if(model.gameContinueInterval) {
        clearInterval(model.gameContinueInterval);
    }
    updateRoundCount(model, 0);
    clearRandomNumber(document, model);
    clearPaintedNumbers(model);
    clearMsg(document,model);
}
export default stopCurrentGame;





