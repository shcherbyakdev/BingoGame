import {processInputUsers,processInputCardsCount,processInputMaxNumber} from './getDataFromInputs';
import  generateCards  from './generateCards';
import { initRenderView } from './views';


const generateGame = (document, model) => {
  model.userCount = processInputUsers(document.getElementById('usersNum').value);
  model.userCardsCount = processInputCardsCount(document.getElementById('cardsNum').value);
  model.maxNumber = processInputMaxNumber(document.getElementById('countNum').value);
  generateCards(model);
  initRenderView(model);
}

export default generateGame;