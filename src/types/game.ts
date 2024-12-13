export type GameState = {
    isGameOver: boolean;
    isCorrectGuess?: boolean;
    score: number;
    guessesRemaining: number;
    currentRound: number;
}

export type GameAction =
    | { type: 'MAKE_GUESS'; payload: { guess: string, answer: string } }
    | { type: 'START_NEW_ROUND' }