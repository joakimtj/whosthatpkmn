import { useState } from "preact/hooks";

interface GuessFormProps {
    onGuess: (guess: string) => void
}

export const GuessForm = ({ onGuess: onStateChange }: GuessFormProps) => {

    const [inputValue, setInputValue] = useState('');

    const onFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Input value:', inputValue);
        onStateChange(inputValue);
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