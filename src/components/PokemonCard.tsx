import { useState } from "preact/hooks";
import { AudioPlayer } from "./AudioPlayer";
import { Pokemon } from "../types";
import { charZeroToUpperCase } from "../utils/charZeroToUppercase";
import { PokemonSprite } from "./PokemonSprite";
import { GuessForm } from "./GuessForm";

interface PokemonCardProps extends Pokemon {
    onGuess: (value: string) => void,
    gameOver: boolean,
}

export const PokemonCard = ({ name, sprites, cries, onGuess, gameOver }: PokemonCardProps) => {

    return (
        <div className="flex flex-col m-4 pt-8 p-12 rounded shadow-lg dark:shadow-zinc-900 bg-zinc-800">
            <h2 className="flex justify-center pb-4 dark:text-white text-2xl">{gameOver ? charZeroToUpperCase(name) : '????'}</h2>
            <PokemonSprite spriteSrc={sprites.front_default} gameOver={gameOver} />
            <GuessForm onGuess={onGuess} />
        </div>
    )
}