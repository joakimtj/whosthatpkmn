import { useEffect, useState } from "preact/hooks"
import { Pokemon } from "../types";
import { getRandomInt } from "../utils/getRandomInt";

export const usePokemon = () => {
    const [pokemon, setPokemon] = useState<Pokemon | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const dexNr = getRandomInt(151);

    const refetchPokemon = () => {
        fetchPokemon();
    }

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${dexNr}`);
            const data = await response.json();
            console.log('Response:', data);
            setPokemon(data);
        }
        catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch pokemon');
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchPokemon();
    }, []);

    return { pokemon, isLoading, error, refetchPokemon };
}