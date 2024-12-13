import { useState } from "preact/hooks";

interface GuessFormProps {
    onGuess: (guess: string, answer: string) => void
    name: string,
}

export const GuessForm = ({ onGuess, name }: GuessFormProps) => {

    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Input value:', inputValue);
        onGuess(inputValue, name)
        setInputValue('');
    }

    return (
        <form onSubmit={onFormSubmit} className="pb-0 p-4 mt-6">
            <input type="text"
                id="name"
                value={inputValue} onChange={(e) => setInputValue((e.target as HTMLInputElement).value)}>

            </input>
        </form>
    )
}