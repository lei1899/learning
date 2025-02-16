import React, { useRef, useState, useEffect } from 'react';
import { PlayerButton, PlayerButtonGroup } from './style';

const AudioPlayer = ({src}) => {
    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const audioElement = audioRef.current;
        if (audioElement) {
            const handlePlay = () => setIsPlaying(true);
            const handlePause = () => setIsPlaying(false);

            audioElement.addEventListener('play', handlePlay);
            audioElement.addEventListener('pause', handlePause);

            return () => {
                audioElement.removeEventListener('play', handlePlay);
                audioElement.removeEventListener('pause', handlePause);
            };
        }
    }, []);

    const togglePlayPause = () => {
        if (isPlaying) {
        audioRef.current.pause();
        } else {
        audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const skipBackward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 3, 0);
        }
    };

    const skipForward = () => {
        if (audioRef.current) {
            audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 3, audioRef.current.duration);
        }
    };

    return (
        <div>
            <audio ref={audioRef} controls>
                <source src={src} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <PlayerButtonGroup>
                <PlayerButton onClick={skipBackward}>Backward 3</PlayerButton>
                <PlayerButton onClick={togglePlayPause}>
                    {isPlaying ? 'Pause' : 'Play'}
                </PlayerButton>
                <PlayerButton onClick={skipForward}>Forward 3</PlayerButton>
            </PlayerButtonGroup>
        </div>
    );
};

export default AudioPlayer;