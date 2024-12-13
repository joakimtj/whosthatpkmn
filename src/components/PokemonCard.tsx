import { useState } from "preact/hooks";
import { AudioPlayer } from "./AudioPlayer";
import { Pokemon } from "../types";
import { PropsWithChildren } from "preact/compat";
import { charZeroToUpperCase } from "../utils/charZeroToUppercase";
import { PokemonSprite } from "./PokemonSprite";

interface PokemonCardProps extends Pokemon {
    onStateChange: (value: string) => void,
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
        <div className="flex flex-col m-4 pt-8 p-12 rounded shadow-lg dark:shadow-zinc-900 bg-zinc-800">
            <h2 className="flex justify-center pb-4 dark:text-white text-2xl">{charZeroToUpperCase(name)}</h2>
            <PokemonSprite spriteSrc={sprites.front_default} />
            <AudioPlayer url={cries.latest} />
            <form onSubmit={onFormSubmit} className="pb-0 p-4 mt-6">
                <input type="text"
                    id="name"
                    value={inputValue} onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}>

                </input>
            </form>
        </div>
    )
}