
import {renderRoundCount,renderRandomNumber,paintNumberInCard,renderMsg,renderLineCompleted,renderCardCompleted,renderWinner} from './views'
import {checkIfCardCompleted,checkIfLineCompleted,checkIfUserWon} from './checkWinner'
import endGame from './endGame'
const generateRandomNumber = model => model.numbersArray.pop();
const generateRandomNumbers = maxNumber => {
    let values = [],arr;
    let i = 1;
    while(i <= maxNumber) {
        values.push(i++);
    }
    arr = shuffle(values).slice(0,25).sort((a, b) => a - b).map(number => ({
        numberToPresent: number,
        isPainted: false
    }))
    return arr;
}
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
      return array;
  }
  const createRandomArray = (model) => {
    let resArr = [],shuffledArray;
    
    let i = 1;
    while (i <= model.maxNumber){
      resArr.push(i);
      i++
    }
    shuffledArray = shuffle(resArr);
   return shuffledArray;
}
const updateRoundCount = (model, roundNumber = 0) => {
    model.currentRound = roundNumber;
    renderRoundCount(model);
}
const clearRandomNumber = (document, model) => {
    clearRandomNumberModel(model);
    clearRandomNumberView(document);
}
const clearMsg=(document,model) => {
    clearMsgModel(model);
    clearMsgView(document);

}
const clearMsgModel = (model) => {
    let users = model.users;
    for (let i =0;i<users.length;i++){
        for (let j = 0;j < users[i].cards.length;j++){
            model.users[i].cards[j].completedLines.fill(false);
            for ( let k = 0; k <users[i].cards[j].numbers.length ;k++){
            model.users[i].cards[j].numbers[k].isPainted = false;
            }
        }
    }
 
}
const clearMsgView = (docuent) => {
    const msgField = document.getElementById('msg');
    msgField.innerHTML = '';
}
const clearRandomNumberModel = (model) => {
    model.randomNumber = null;
}

const clearRandomNumberView = (document) => {
    const randomNumbersDiv = document.getElementById('random-numbers');
    randomNumbersDiv.innerHTML = '';
}
const playRound = () => {
    const model = window.app.model;

    updateIncrementRoundCount(model);
    updateRandomNumber(model);
 checkСoincidence(model);

}
const clearPaintedNumbers = (model)=>{
    clearNumbersModel(model);
    clearNumbersView(document);
}
const clearNumbersModel = (model)  =>{
    let users = model.users;
    for (let i =0;i<users.length;i++){
        for (let j = 0;j < users[i].cards.length;j++){
            for ( let k = 0; k <users[i].cards[j].numbers.length ;k++){
            model.users[i].cards[j].numbers[k].isPainted = false;
            }
        }
    }
}
    const clearNumbersView = (document)=>{
        const number = document.querySelectorAll('.divEl');
        for (let i = 0; i <number.length;i++){
            number[i].classList.remove('paintedNumber');
        }
       }
const updateIncrementRoundCount = (model) => {
    // Update model
    model.currentRound += 1;
    // Update view
    renderRoundCount(model);
}
const updateRandomNumber = (model) => {
    model.randomNumber = generateRandomNumber(model);
    renderRandomNumber(model);
}

const updateNumberInCard = (model, userNumber, cardNumber, numberIndex) => {
    // Update model
    model.users[userNumber].cards[cardNumber].numbers[numberIndex].isPainted = true;
    // Update view
    paintNumberInCard(userNumber, cardNumber, model.users[userNumber].cards[cardNumber].numbers[numberIndex].numberToPresent);
}
const checkСoincidence = (model) => {
    
    for(let i = 0; i < model.userCount; i++) {
        for(let j = 0; j < model.userCardsCount; j++) {
            if(model.users[i].cards[j].isCompleted) {
                continue;
            } else {
                for(let k = 0; k < 25; k ++) {
                    if(model.users[i].cards[j].numbers[k].isPainted) {
                        continue;
                    } else {
                        if(model.users[i].cards[j].numbers[k].numberToPresent == model.randomNumber) {
                            updateNumberInCard(model, i, j, k);
                            const rowNumber = k % 5;
                            if(model.users[i].cards[j].completedLines[rowNumber] || checkIfLineCompleted(model, i, j, rowNumber)) {
                                model.users[i].cards[j].completedLines[rowNumber] = true;
                                renderLineCompleted(i,rowNumber,j);
                               //alert(`User #${i} has crossed line #${rowNumber} in card #${j}`);
                                if(checkIfCardCompleted(model, i, j)) {
                                    model.users[i].cards[j].isCompleted = true;
                                    //alert(`User #${i} has completed card #${j}`);
                                    renderCardCompleted(i,j);
                                            if(checkIfUserWon(model, i)) {
                                                renderWinner(i);
                                    //alert(`User #${i} won!`); 
                                        endGame(document, model);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            
        }
    }
}


export  {generateRandomNumbers,updateRoundCount,clearPaintedNumbers,clearRandomNumber,createRandomArray,playRound,clearMsg};