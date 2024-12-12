import { render } from 'preact';
import { PokemonCard } from './components/PokemonCard';
import { usePokemon } from './hooks/usePokemon';
import { useEffect, useState } from 'preact/hooks';

import './index.css'

export function App() {

    const [gameOver, setGameOver] = useState<boolean>(false);

    const { pokemon, isLoading, error, refetchPokemon } = usePokemon();

    const handleStateChange = (newValue: string) => {
        if (pokemon) {
            console.log('Is guess correct:', pokemon.name === newValue.toLowerCase())
        }
        setGameOver(true);
    }

    // When game ends fetch a new Pokémon
    useEffect(() => {
        if (gameOver) {
            refetchPokemon();
        }
    }, [gameOver])

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">Loading...</div>
            </div>
        )
    }

    return (
        <div className="flex justify-center items-center h-screen">
            {pokemon && (<PokemonCard name={pokemon.name} sprites={pokemon.sprites} cries={pokemon.cries} onStateChange={handleStateChange} />)}
        </div>
    );
}

render(<App />, document.getElementById('app'));
