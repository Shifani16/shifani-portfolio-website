import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"

export default function MusicToggle() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        audioRef.current = new Audio("/audio/Memory.mp3");
        audioRef.current.loop = true;
    },[])

    const toggleMusic = () => {
        if(!audioRef.current) return;

        if(isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <button
        onClick={toggleMusic}
        className="fixed cursor-pointer top-15 right-3 md:top-15 md:right-10 z-50 p-4 rounded-full bg-pink-400 text-neutral-300 shadow-xl hover:bg-pink-800/80 transition-all"
        >
            {isPlaying ? <Volume2 /> : <VolumeX/>}
        </button>
    );
}