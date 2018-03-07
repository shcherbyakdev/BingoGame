export default window.app = {
    model: {
        userCount: 0,
        users: [
           {
                cards: [
                    {
                        isCompleted: false,
                        numbers: [
                            {
                                isPainted: false,
                                numberToPresent: 0
                            }
                        ]
                    }
                ]
            }
        ],
        maxNumber: 0,
        numbersArray: null,
        userCardsCount: 0,
        randomNumber: null,
        gameIsOn: true,
        isGameInitialized: false,
        winner: null,
        currentRound: 0,
        gameContinueInterval: null
    }
};
