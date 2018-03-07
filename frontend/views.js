
const renderCards = model => {
    const allUsers = document.createElement('div');
    allUsers.setAttribute('id', `users`);
    for (let i = 0; i < model.userCount; i++ ) {
        const user = document.createElement('div');
        user.setAttribute('id', `user-${i}`);
        user.appendChild(userLabel(i));
        for (let j = 0; j < model.userCardsCount; j++) {
            const card = renderOneCard(model.users[i].cards[j].numbers);
            card.setAttribute('id', `card-${j}`);
            user.appendChild(cardLabel(j));
            user.appendChild(card);
        }
        allUsers.appendChild(user);
    }
    document.getElementById('users').appendChild(allUsers);
}


const renderOneCard = cardData => {
    const cardWrapper = document.createElement('div');
    const cardArray = document.querySelector('#cards');
    cardWrapper.className = 'cardWrapper';

    let step = 5,
        temp=[],
        divW,
        divEl;

    for (let i = 0; i < cardData.length; i+=step) {
        temp = cardData.slice(i, i+step);
        divW = document.createElement('div');
        divW.className ='cardContainer';
        for (let j = 0; j < temp.length; j++) {
            divEl = document.createElement('div');
            divEl.className = 'divEl';
            divEl.innerText = temp[j].numberToPresent;
            divEl.classList.add(`number-${temp[j].numberToPresent}`);
            divW.appendChild(divEl);
        }
        cardWrapper.appendChild(divW);
    }
    return cardWrapper;
}

const changeViewToCreateGame = () => {
    // Hide game
    const playGamePage = document.getElementById('play-game-page');
    playGamePage.style.display = 'none';
    // Random number container
    const randomNumberContainer = document.getElementById('random-numbers-container');
    randomNumberContainer.style.display = 'none';

    const msgField = document.getElementById('msg');
    msgField.style.display = 'none';
    // Wipe game markup
    const usersDiv = document.getElementById('users');
    usersDiv.innerHTML = '';

    const randomNumbersDiv = document.getElementById('random-numbers');
    randomNumbersDiv.innerHTML = '';

    // Show create game form
    const createGamePage = document.getElementById('create-game-page');
    createGamePage.style.display = 'block';
}
const initRenderView = model => {
    renderCards(model);
}


const userLabel = userNumber => {
    let label = document.createElement('h3');
    label.innerHTML = `User #${userNumber}`;
    return label;
}

const cardLabel = cardNumber => {
    let label = document.createElement('h5');
    label.innerHTML = `Card #${cardNumber}`;
    return label;
}


const changeViewToPlayGame = () => {
    // Hide form
    const createGamePage = document.getElementById('create-game-page');
    createGamePage.style.display = 'none';

    // Show play game page
    const playGamePage = document.getElementById('play-game-page');
    playGamePage.style.display = 'flex';

    // Show game button
    const playGameBtn = document.getElementById('start-game');
    playGameBtn.style.display = 'block';

    // Hide stop button
    const stopGameBtn = document.getElementById('stop-game');
    stopGameBtn.style.display = 'none';
}

const renderRoundCount = model => {
    const sceletonRoundCount = document.getElementById('round-count');
    sceletonRoundCount.innerHTML = `Round: ${model.currentRound}`;
}

const swapStopToStartBtn = (document) => {
    // Hide stop btn
    const stopGameBtn = document.getElementById('stop-game');
    stopGameBtn.style.display = 'none';

    const startGameBtn = document.getElementById('start-game');
    startGameBtn.style.display = 'block';

    const randomNumberContainer = document.getElementById('random-numbers-container');
    randomNumberContainer.style.display = 'none';

    const msgField = document.getElementById('msg');
    msgField.style.display = 'none';
}

const swapStartToStopBtn = (document) => {
    // Hide start btn
    const playGameBtn = document.getElementById('start-game');
    playGameBtn.style.display = 'none';

    // Show stop btn
    const stopGameBtn = document.getElementById('stop-game');
    stopGameBtn.style.display = 'block';
}

const swapStopToStartNewGameBtn = (document) => {
    // Hide stop btn
    const stopGameBtn = document.getElementById('stop-game');
    stopGameBtn.style.display = 'none';

    const startNewGameBtn = document.getElementById('start-new-game');
    startNewGameBtn.style.display = 'block';

      
}

const renderRandomNumber = model => {
    const currentRandomNumber = document.createElement('div');
    currentRandomNumber.setAttribute('class', `r-num-${model.currentRound}`);
    currentRandomNumber.innerHTML = model.randomNumber;
    const sceletonRNumContainer = document.getElementById('random-numbers');
    sceletonRNumContainer.appendChild(currentRandomNumber);
}
const paintNumberInCard = (userNumber, cardNumber, numberNumber) => {
    const userNode = document.getElementById(`user-${userNumber}`);
    const cardNode = userNode.querySelector(`#card-${cardNumber}`);
    const numberNode = cardNode.querySelector(`.number-${numberNumber}`);
    numberNode.classList.add('paintedNumber');
}

const renderLineCompleted = (user,row,card) => {
    const msgField = document.getElementById('msg');
    const li = document.createElement('li');
    li.innerHTML = `User #${user} has crossed line #${row} in card #${card}`;
    msgField.appendChild(li);
}
const renderCardCompleted = (user,card) => {
    const msgField = document.getElementById('msg');
    const li = document.createElement('li');
    li.innerHTML = `User #${user} has completed card #${card}`;
    msgField.appendChild(li);
}
const renderWinner = (user) => {
    const msgField = document.getElementById('msg');
    const li = document.createElement('li');
    li.innerHTML = `User #${user} won!`;
    msgField.appendChild(li);
}



export {renderOneCard,renderRoundCount,renderRandomNumber,renderCards,swapStopToStartNewGameBtn,initRenderView,changeViewToCreateGame,changeViewToPlayGame,swapStopToStartBtn,swapStartToStopBtn,paintNumberInCard,renderLineCompleted,renderCardCompleted,renderWinner};