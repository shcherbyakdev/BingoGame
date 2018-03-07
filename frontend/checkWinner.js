
const checkIfUserWon = (model, userNumber) => {
    for(let i = 0; i < model.users[userNumber].cards.length; i ++) {
        if (!model.users[userNumber].cards[i].isCompleted) {
            return false;
        }
    }
    return true;
}
const checkIfCardCompleted = (model, userNumber, cardNumber) => {
    for(let i = 0; i < model.users[userNumber].cards[cardNumber].completedLines.length; i ++) {
        if (!model.users[userNumber].cards[cardNumber].completedLines[i]) {
            return false;
        }
    }
    return true;
}
const checkIfLineCompleted = (model, userNumber, cardNumber, rowNumber) => {
    for(let i = rowNumber; i < 25; i += 5) {
        if (model.users[userNumber].cards[cardNumber].numbers[i].isPainted) {
          
        } else {
            return false;
        }
    }
    return true;
}
export {checkIfLineCompleted,checkIfUserWon,checkIfCardCompleted};