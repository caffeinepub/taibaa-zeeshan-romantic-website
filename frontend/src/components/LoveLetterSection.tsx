import { useEffect, useRef } from 'react';

export default function LoveLetterSection() {
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
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="love-letter"
      ref={sectionRef}
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/generated/rose-bg.dim_1920x1080.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(2px)',
          transform: 'scale(1.05)',
        }}
      />

      {/* Rose/blush gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, oklch(0.22 0.08 10 / 0.88) 0%, oklch(0.28 0.06 10 / 0.82) 50%, oklch(0.22 0.08 10 / 0.90) 100%)',
        }}
      />

      <div
        ref={contentRef}
        className="fade-in-up"
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
          width: '100%',
        }}
      >
        {/* Decorative top */}
        <div style={{ marginBottom: '1rem' }}>
          <span style={{ color: 'oklch(0.82 0.07 10)', fontSize: '2rem' }}>🌹</span>
        </div>

        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: 600,
            color: 'oklch(0.86 0.08 75)',
            marginBottom: '2rem',
            letterSpacing: '0.03em',
            textShadow: '0 0 30px oklch(0.76 0.10 75 / 0.4)',
          }}
        >
          From Zeeshan to Taibaa
        </h2>

        {/* Letter card */}
        <div
          style={{
            background: 'oklch(0.96 0.02 75 / 0.06)',
            border: '1px solid oklch(0.76 0.10 75 / 0.25)',
            borderRadius: '4px',
            padding: 'clamp(2rem, 5vw, 3.5rem)',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 8px 40px oklch(0.14 0.06 10 / 0.5)',
          }}
        >
          <p
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
              color: 'oklch(0.86 0.08 75)',
              marginBottom: '1.5rem',
              textShadow: '0 0 15px oklch(0.76 0.10 75 / 0.3)',
            }}
          >
            Taibaa,
          </p>

          <div
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(1.05rem, 2.5vw, 1.25rem)',
              color: 'oklch(0.92 0.03 10)',
              lineHeight: 2.1,
              fontStyle: 'italic',
              fontWeight: 300,
            }}
          >
            <p style={{ marginBottom: '1.2rem' }}>
              You are my calm in chaos.<br />
              My strength when I feel weak.<br />
              My home in this restless world.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              Life feels incomplete without your smile.<br />
              Even in my flaws, my heart has only loved you.
            </p>
            <p style={{ marginBottom: '1.2rem' }}>
              I don't want perfection.<br />
              I want us — growing, learning, forgiving, together.
            </p>
            <p>
              I choose you today.<br />
              I choose you tomorrow.<br />
              <strong
                style={{
                  fontStyle: 'normal',
                  fontWeight: 600,
                  color: 'oklch(0.86 0.08 75)',
                  textShadow: '0 0 15px oklch(0.76 0.10 75 / 0.4)',
                }}
              >
                I will choose you for the rest of my life.
              </strong>
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <span
              style={{
                fontFamily: '"Great Vibes", cursive',
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                color: 'oklch(0.82 0.07 10)',
              }}
            >
              Forever Yours, Zeeshan ❤️
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
