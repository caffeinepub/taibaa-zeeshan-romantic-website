import { useRef, useState } from 'react';
import { Music, Pause } from 'lucide-react';

export default function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.volume = 0.4;
      audio.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // Autoplay blocked
        setIsPlaying(false);
      });
    }
  };

  return (
    <>
      {/* Royalty-free ambient piano music from a public CDN */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        src="https://www.bensound.com/bensound-music/bensound-romantic.mp3"
      />
      <button
        onClick={toggle}
        aria-label={isPlaying ? 'Pause music' : 'Play romantic music'}
        style={{
          position: 'fixed',
          top: '1.25rem',
          right: '1.25rem',
          zIndex: 1000,
          width: '3rem',
          height: '3rem',
          borderRadius: '50%',
          border: '1.5px solid oklch(0.76 0.10 75)',
          background: 'oklch(0.82 0.07 10 / 0.15)',
          backdropFilter: 'blur(8px)',
          color: 'oklch(0.76 0.10 75)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 0 15px oklch(0.76 0.10 75 / 0.3)',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.82 0.07 10 / 0.3)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px oklch(0.76 0.10 75 / 0.5)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLButtonElement).style.background = 'oklch(0.82 0.07 10 / 0.15)';
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 15px oklch(0.76 0.10 75 / 0.3)';
        }}
      >
        {isPlaying ? <Pause size={18} /> : <Music size={18} />}
      </button>
    </>
  );
}
