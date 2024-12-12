import { useRef, useState } from "preact/hooks"
import { PlayCircle, StopCircle } from "lucide-react"

interface AudioPlayerProps {
    url: string
}

export const AudioPlayer = ({ url }: AudioPlayerProps) => {
    const [isPlaying, setIsPlaying] = useState<boolean>(false)
    const [count, setCount] = useState<number>(0)
    const audioRef = useRef<HTMLAudioElement>(null)

    const handlePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                console.log("isPlaying: true");
            } else {
                setCount((prevCount) => prevCount + 1);
                audioRef.current.play();
                console.log(count);
            }
        }
        setIsPlaying(!isPlaying);
    }

    return (
        <div className="flex justify-center">
            <audio
                ref={audioRef}
                src={url}
            />
            <button
                onClick={handlePlay}
            >
                {isPlaying ? <StopCircle /> : <PlayCircle />}
            </button>
        </div>
    )
}