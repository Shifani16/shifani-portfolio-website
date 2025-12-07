import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react"

export default function MusicToggle() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        audioRef.current = new Audio("/audio/Melody.mp3");
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
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-yellow-primary text-blue-primary shadow-xl hover:bg-yellow-dark transition-all"
        >
            {isPlaying ? <Volume2 /> : <VolumeX/>}
        </button>
    );
}