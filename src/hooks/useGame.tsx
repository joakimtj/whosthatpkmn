import { useReducer } from "preact/hooks";
import { GameState } from "../types";
import { GameReducer } from "../reducers/gameReducer";

const initialState: GameState = {
    isGameOver: false,
    isCorrectGuess: null,
    score: 0,
    guessesRemaining: 5,
    currentRound: 0,
}

export const useGame = () => {
    const [state, dispatch] = useReducer(GameReducer, initialState);

    const makeGuess = (guess: string, answer: string) => {
        console.log('Guess:', guess, 'Answer:', answer);
        dispatch({ type: 'MAKE_GUESS', payload: { guess, answer } });
    }

    return {
        state,
        makeGuess,
        dispatch,
    };
}