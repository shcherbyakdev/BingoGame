const processInputUsers = (value) => {
    const usersCount = Number(value);
    if(usersCount < 2 || usersCount > 5) {
        throw new Error("User count must be between 2 and 5");
    }
    return usersCount;
}

const processInputCardsCount = (value) => {
    const cardsCount = Number(value);
    if(cardsCount < 1 || cardsCount > 3) {
        throw new Error("Cards count must be between 1 and 3")
    }
    return cardsCount;
}

const processInputMaxNumber = (value) => {
    const maxNumber = Number(value);
    if(maxNumber < 25 || maxNumber > 100) {
        throw new Error("Max number must be between 25 and 100");
    }
    return maxNumber;
}


export {processInputUsers,processInputCardsCount,processInputMaxNumber};