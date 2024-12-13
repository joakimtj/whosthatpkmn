import { GameAction, GameState } from "../types";

export const GameReducer = (state: GameState, action: GameAction) => {
    switch (action.type) {
        case 'MAKE_GUESS':
            const isCorrect = action.payload.guess.toLowerCase() ===
                action.payload.answer.toLowerCase()
            console.log('Remaining guesses:', state.guessesRemaining);
            console.log('Score:', state.score);
            return {
                ...state,
                isGameOver: isCorrect,
                isGuessCorrect: isCorrect,
                score: isCorrect ? state.score + 1 : state.score,
                guessesRemaining: isCorrect ? 5 : state.guessesRemaining - 1,
            }
        case 'START_NEW_ROUND':
            return {
                isGameOver: false,
                isCorrectGuess: null,
                score: 0,
                guessesRemaining: 5,
                currentRound: 0,
            }
    }
} 