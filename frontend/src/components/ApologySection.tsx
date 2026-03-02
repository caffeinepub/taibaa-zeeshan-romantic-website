import { useEffect, useRef } from 'react';

export default function ApologySection() {
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
      id="apology"
      ref={sectionRef}
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        background: 'linear-gradient(135deg, oklch(0.96 0.02 75) 0%, oklch(0.92 0.04 10) 50%, oklch(0.93 0.03 60) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background element */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '20rem',
          color: 'oklch(0.82 0.07 10 / 0.08)',
          pointerEvents: 'none',
          userSelect: 'none',
          lineHeight: 1,
        }}
      >
        ❤
      </div>

      <div
        ref={contentRef}
        className="fade-in-up"
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Ornament */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ color: 'oklch(0.76 0.10 75)', fontSize: '1.2rem', letterSpacing: '0.4rem' }}>
            ✦ ✦ ✦
          </span>
        </div>

        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 600,
            color: 'oklch(0.28 0.09 10)',
            marginBottom: '2rem',
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          }}
        >
          I Am Truly Sorry, Taibaa
        </h2>

        {/* Decorative line */}
        <div
          style={{
            width: '80px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, oklch(0.76 0.10 75), transparent)',
            margin: '0 auto 2.5rem',
          }}
        />

        <div
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: 'oklch(0.32 0.07 10)',
            lineHeight: 2,
            fontStyle: 'italic',
            fontWeight: 400,
          }}
        >
          <p style={{ marginBottom: '1.5rem' }}>
            My love, I know I have made mistakes.<br />
            Some were out of immaturity, some unknowingly,<br />
            but never out of lack of love.
          </p>
          <p style={{ marginBottom: '1.5rem' }}>
            If my words ever hurt you,<br />
            if my silence ever made you feel alone,<br />
            if my actions ever caused you pain —<br />
            <strong style={{ fontStyle: 'normal', color: 'oklch(0.28 0.09 10)', fontWeight: 600 }}>
              I am deeply, sincerely sorry.
            </strong>
          </p>
          <p>
            You deserved better understanding from me.<br />
            And I promise to become that better man for you.
          </p>
        </div>

        {/* Bottom ornament */}
        <div style={{ marginTop: '2.5rem' }}>
          <span
            style={{
              fontFamily: '"Great Vibes", cursive',
              fontSize: '2rem',
              color: 'oklch(0.76 0.10 75)',
            }}
          >
            — Zeeshan
          </span>
        </div>
      </div>
    </section>
  );
}
