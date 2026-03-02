import { useEffect, useRef, useState } from 'react';

const memories = [
  { label: 'Upload Photo 1', caption: 'The day I realized you are my forever.' },
  { label: 'Upload Our Selfie', caption: 'Your smile, my peace.' },
  { label: 'Upload Wedding/Engagement Memory', caption: 'Our laughter, my favorite sound.' },
  { label: 'Upload Favorite Memory Together', caption: 'The world feels right when I am with you.' },
  { label: 'Upload Memory 5', caption: 'Every moment with you is priceless.' },
  { label: 'Upload Memory 6', caption: 'The day I realized you are my forever.' },
  { label: 'Upload Memory 7', caption: 'Your smile, my peace.' },
  { label: 'Upload Memory 8', caption: 'Our laughter, my favorite sound.' },
];

function MemoryCard({ memory, index }: { memory: typeof memories[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '1',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1.5px solid oklch(0.76 0.10 75 / 0.4)',
        cursor: 'pointer',
        background: 'linear-gradient(135deg, oklch(0.93 0.03 60) 0%, oklch(0.90 0.04 10) 100%)',
        boxShadow: hovered
          ? '0 8px 30px oklch(0.28 0.09 10 / 0.3), 0 0 20px oklch(0.76 0.10 75 / 0.2)'
          : '0 2px 10px oklch(0.28 0.09 10 / 0.1)',
        transition: 'box-shadow 0.4s ease, transform 0.4s ease',
        transform: hovered ? 'scale(1.03)' : 'scale(1)',
      }}
    >
      {/* Placeholder content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
          transition: 'opacity 0.4s ease',
          opacity: hovered ? 0 : 1,
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '1.5px dashed oklch(0.76 0.10 75 / 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '0.75rem',
            color: 'oklch(0.76 0.10 75 / 0.6)',
            fontSize: '1.5rem',
          }}
        >
          📷
        </div>
        <p
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: '0.8rem',
            color: 'oklch(0.45 0.07 10)',
            textAlign: 'center',
            lineHeight: 1.4,
            fontStyle: 'italic',
          }}
        >
          {memory.label}
        </p>
        <div
          style={{
            position: 'absolute',
            bottom: '0.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: '0.65rem',
            color: 'oklch(0.76 0.10 75 / 0.5)',
            letterSpacing: '0.1em',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
          }}
        >
          {index + 1} / 8
        </div>
      </div>

      {/* Hover overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, oklch(0.22 0.08 10 / 0.92) 0%, oklch(0.28 0.09 10 / 0.88) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1.5rem',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
        }}
      >
        <p
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
            color: 'oklch(0.86 0.08 75)',
            textAlign: 'center',
            lineHeight: 1.5,
            textShadow: '0 0 20px oklch(0.76 0.10 75 / 0.5)',
          }}
        >
          {memory.caption}
        </p>
      </div>
    </div>
  );
}

export default function MemoriesGallery() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && titleRef.current) {
            titleRef.current.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="memories"
      ref={sectionRef}
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        background: 'oklch(0.18 0.07 10)',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Title */}
        <div ref={titleRef} className="fade-in-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
              color: 'oklch(0.76 0.10 75 / 0.7)',
              display: 'block',
              marginBottom: '0.5rem',
            }}
          >
            A lifetime of
          </span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 600,
              color: 'oklch(0.86 0.08 75)',
              letterSpacing: '0.02em',
              textShadow: '0 0 30px oklch(0.76 0.10 75 / 0.3)',
            }}
          >
            Our Story, Our Moments
          </h2>
          <div
            style={{
              width: '80px',
              height: '2px',
              background: 'linear-gradient(to right, transparent, oklch(0.76 0.10 75), transparent)',
              margin: '1.5rem auto 0',
            }}
          />
        </div>

        {/* Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1rem',
          }}
          className="sm:grid-cols-4"
        >
          {memories.map((memory, index) => (
            <MemoryCard key={index} memory={memory} index={index} />
          ))}
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: '2rem',
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontStyle: 'italic',
            color: 'oklch(0.76 0.10 75 / 0.5)',
            fontSize: '0.95rem',
          }}
        >
          Hover over each frame to reveal a memory caption ❤
        </p>
      </div>
    </section>
  );
}
