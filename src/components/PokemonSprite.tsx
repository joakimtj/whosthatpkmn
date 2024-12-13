import { Pokemon } from "../types"

interface PokemonSpriteProps {
    spriteSrc: string;
}

export const PokemonSprite = ({ spriteSrc }: PokemonSpriteProps) => {

    return (
        <figure className="flex justify-center">
            <img
                src={spriteSrc}
                className="brightness-0"
                alt="pokemon sprite"
            >
            </img>
        </figure>
    )
}