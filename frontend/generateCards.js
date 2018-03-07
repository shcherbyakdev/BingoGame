import { generateRandomNumbers } from './helpers';

const generateCards = model => {
    const usersCount = model.userCount;
    const userCardsCount = model.userCardsCount;
    const maxNumber = model.maxNumber;
    

    model.users = [];
    for(let i = 0; i < usersCount; i++){
        model.users[i] = {};
    }
    for (let i = 0; i < usersCount; i++) {
        model.users[i].cards = new Array(userCardsCount);
        for (let j = 0; j < userCardsCount; j++) {
            model.users[i].cards[j] = {
                isCompleted: false,
                numbers: generateRandomNumbers(maxNumber),
                completedLines: [false, false, false, false, false]
            }
        }
    }
}


export default generateCards;



