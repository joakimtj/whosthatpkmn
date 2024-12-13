import { render } from 'preact';
import { PokemonCard } from './components/PokemonCard';
import { usePokemon } from './hooks/usePokemon';
import { useEffect, useState } from 'preact/hooks';

import './index.css'
import { GameState } from './types';
import { useGame } from './hooks/useGame';

export function App() {

    const { state, makeGuess, dispatch } = useGame();

    const { pokemon, isLoading, error, refetchPokemon } = usePokemon();


    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#222222]">
                <div className="text-center">Loading...</div>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen pb-2 bg-[#222222]">
            {pokemon && (<PokemonCard name={pokemon.name} sprites={pokemon.sprites} cries={pokemon.cries} onGuess={makeGuess} gameOver={state.isGameOver} />)}
        </div>
    );
}

render(<App />, document.getElementById('app'));
