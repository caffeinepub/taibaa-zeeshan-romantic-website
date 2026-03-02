import { useEffect, useRef } from 'react';

export default function FinalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && contentRef.current) {
            contentRef.current.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="final"
      ref={sectionRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, oklch(0.14 0.06 10) 0%, oklch(0.10 0.05 10) 50%, oklch(0.14 0.06 10) 100%)',
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
      }}
    >
      {/* Large background heart */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: 'clamp(18rem, 40vw, 30rem)',
          color: 'oklch(0.28 0.09 10)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
          animation: 'heartPulse 4s ease-in-out infinite',
          filter: 'blur(1px)',
        }}
      >
        ❤
      </div>

      {/* Glow rings */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(300px, 60vw, 500px)',
          height: 'clamp(300px, 60vw, 500px)',
          borderRadius: '50%',
          border: '1px solid oklch(0.82 0.07 10 / 0.08)',
          animation: 'heartPulse 4s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(400px, 75vw, 650px)',
          height: 'clamp(400px, 75vw, 650px)',
          borderRadius: '50%',
          border: '1px solid oklch(0.76 0.10 75 / 0.05)',
          animation: 'heartPulse 4s ease-in-out 0.5s infinite',
          pointerEvents: 'none',
        }}
      />

      <div
        ref={contentRef}
        className="fade-in-up"
        style={{
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
        }}
      >
        {/* Top ornament */}
        <div style={{ marginBottom: '2rem' }}>
          <span
            style={{
              color: 'oklch(0.76 0.10 75 / 0.6)',
              fontSize: '1rem',
              letterSpacing: '0.5rem',
            }}
          >
            ✦ ✦ ✦
          </span>
        </div>

        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(1.8rem, 5vw, 3.8rem)',
            fontWeight: 600,
            color: 'oklch(0.86 0.08 75)',
            lineHeight: 1.3,
            marginBottom: '2.5rem',
            letterSpacing: '0.02em',
            animation: 'pulseGlow 3s ease-in-out infinite',
          }}
        >
          Taibaa, I Choose You.<br />
          Again. Every Single Day.
        </h2>

        {/* Decorative line */}
        <div
          style={{
            width: '100px',
            height: '1px',
            background: 'linear-gradient(to right, transparent, oklch(0.76 0.10 75 / 0.6), transparent)',
            margin: '0 auto 2.5rem',
          }}
        />

        {/* Heart */}
        <div
          style={{
            fontSize: '3rem',
            marginBottom: '1.5rem',
            animation: 'heartBeat 1.5s ease-in-out infinite',
            display: 'inline-block',
          }}
        >
          ❤️
        </div>

        <div>
          <p
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              color: 'oklch(0.88 0.05 10)',
              lineHeight: 1.6,
              textShadow: '0 0 20px oklch(0.82 0.07 10 / 0.4)',
            }}
          >
            Forever Yours,
          </p>
          <p
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
              color: 'oklch(0.86 0.08 75)',
              textShadow: '0 0 25px oklch(0.76 0.10 75 / 0.5)',
            }}
          >
            Zeeshan Khan ❤️
          </p>
        </div>

        {/* Bottom ornament */}
        <div style={{ marginTop: '3rem' }}>
          <span
            style={{
              color: 'oklch(0.76 0.10 75 / 0.4)',
              fontSize: '0.8rem',
              letterSpacing: '0.4rem',
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              textTransform: 'uppercase',
            }}
          >
            With all my love, always
          </span>
        </div>
      </div>
    </section>
  );
}
