import { useState } from "preact/hooks";
import { AudioPlayer } from "./AudioPlayer";
import { Pokemon } from "../types";
import { PropsWithChildren } from "preact/compat";
import { charZeroToUpperCase } from "../utils/charZeroToUppercase";

interface PokemonCardProps extends Pokemon {
    onStateChange: (value: string) => void
}

export const PokemonCard = ({ name, sprites, cries, onStateChange }: PropsWithChildren<PokemonCardProps>) => {

    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Input value:', inputValue);
        onStateChange(inputValue);
        setInputValue('');
    }

    return (
        <div className="flex flex-col m-4 p-12 rounded shadow-lg dark:shadow-gray-900 bg-gray-700">
            <h2 className="flex justify-center text-black">{charZeroToUpperCase(name)}</h2>
            <figure className="flex justify-center">
                <img
                    src={sprites.front_default}
                    className="brightness-0"
                    alt="pokemon sprite"
                >
                </img>
            </figure>
            <AudioPlayer url={cries.latest} />
            <form onSubmit={onFormSubmit} className="p-4 mt-6">
                <input type="text"
                    id="name"
                    value={inputValue} onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}>

                </input>
            </form>
        </div>
    )
}