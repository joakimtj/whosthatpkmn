import { render } from 'preact';
import { PokemonCard } from './components/PokemonCard';
import { usePokemon } from './hooks/usePokemon';
import { useEffect, useState } from 'preact/hooks';

import './index.css'

export function App() {

    const [gameOver, setGameOver] = useState<boolean>(false);

    const { pokemon, isLoading, error, refetchPokemon } = usePokemon();

    const handleGuess = (newValue: string) => {
        if (pokemon) {
            if (pokemon.name === newValue.toLowerCase()) {
                setGameOver(true);
            }
            console.log('Is guess correct:', pokemon.name === newValue.toLowerCase())
        }
    }

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen bg-[#222222]">
                <div className="text-center">Loading...</div>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen pb-2 bg-[#222222]">
            {pokemon && (<PokemonCard name={pokemon.name} sprites={pokemon.sprites} cries={pokemon.cries} onGuess={handleGuess} gameOver={gameOver} />)}
        </div>
    );
}

render(<App />, document.getElementById('app'));
