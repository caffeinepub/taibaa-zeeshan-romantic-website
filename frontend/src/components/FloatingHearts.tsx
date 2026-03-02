import { useMemo } from 'react';

interface HeartParticle {
  id: number;
  left: string;
  size: number;
  opacity: number;
  duration: number;
  delay: number;
}

export default function FloatingHearts() {
  const hearts = useMemo<HeartParticle[]>(() => {
    return Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 14,
      opacity: 0.25 + Math.random() * 0.45,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 12,
    }));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        overflow: 'hidden',
      }}
      aria-hidden="true"
    >
      {hearts.map((heart) => (
        <span
          key={heart.id}
          style={{
            position: 'absolute',
            bottom: '-5%',
            left: heart.left,
            fontSize: `${heart.size}px`,
            opacity: heart.opacity,
            animation: `floatUp ${heart.duration}s ease-in-out ${heart.delay}s infinite`,
            color: 'oklch(0.82 0.07 10)',
            userSelect: 'none',
            lineHeight: 1,
          }}
        >
          ❤
        </span>
      ))}
    </div>
  );
}
