interface PokemonSpriteProps {
    spriteSrc: string,
    gameOver: boolean,
}

export const PokemonSprite = ({ spriteSrc, gameOver }: PokemonSpriteProps) => {

    return (
        <figure className="flex justify-center">
            <img
                src={spriteSrc}
                className={`transition-all duration-500 ease-in-out scale-[2.0] image-pixel ${gameOver ? "brightness-100" : "brightness-0"}`}
                alt="pokemon sprite"
            >
            </img>
        </figure>
    )
}