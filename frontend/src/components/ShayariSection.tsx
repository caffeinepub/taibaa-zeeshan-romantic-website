import { useEffect, useRef, useState } from 'react';

const shayaris = [
  {
    text: 'Tum meri duaon ka sabse haseen jawab ho,\nTum meri zindagi ka sabse khoobsurat khwaab ho.',
    number: '01',
  },
  {
    text: 'Galtiyan meri thi, saza tumne sahi,\nMohabbat meri kam nahi thi, bas samajh kam thi.',
    number: '02',
  },
  {
    text: 'Tum ho toh sab kuch hai,\nTum nahi toh kuch bhi nahi.',
    number: '03',
  },
  {
    text: 'Teri muskurahat meri duniya hai,\nTera saath meri jannat hai.',
    number: '04',
  },
];

function ShayariCard({ shayari, delay }: { shayari: typeof shayaris[0]; delay: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => setVisible(true), delay);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={cardRef}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: 'opacity 0.9s ease, transform 0.9s ease',
        textAlign: 'center',
        padding: 'clamp(2rem, 4vw, 3rem) clamp(1.5rem, 4vw, 3rem)',
        position: 'relative',
      }}
    >
      {/* Quote number */}
      <span
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.75rem',
          color: 'oklch(0.76 0.10 75 / 0.4)',
          letterSpacing: '0.3em',
          display: 'block',
          marginBottom: '1.5rem',
        }}
      >
        {shayari.number}
      </span>

      {/* Quote marks */}
      <span
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '4rem',
          color: 'oklch(0.76 0.10 75 / 0.3)',
          lineHeight: 0.5,
          display: 'block',
          marginBottom: '1rem',
        }}
      >
        "
      </span>

      <p
        style={{
          fontFamily: '"Great Vibes", cursive',
          fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
          color: 'oklch(0.86 0.08 75)',
          lineHeight: 1.8,
          whiteSpace: 'pre-line',
          textShadow: '0 0 20px oklch(0.76 0.10 75 / 0.3)',
        }}
      >
        {shayari.text}
      </p>

      <span
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '4rem',
          color: 'oklch(0.76 0.10 75 / 0.3)',
          lineHeight: 0.5,
          display: 'block',
          marginTop: '1rem',
        }}
      >
        "
      </span>
    </div>
  );
}

function Ornament() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        padding: '0.5rem 0',
      }}
    >
      <div
        style={{
          flex: 1,
          maxWidth: '150px',
          height: '1px',
          background: 'linear-gradient(to right, transparent, oklch(0.76 0.10 75 / 0.4))',
        }}
      />
      <span style={{ color: 'oklch(0.82 0.07 10)', fontSize: '1.2rem' }}>🌹</span>
      <div
        style={{
          flex: 1,
          maxWidth: '150px',
          height: '1px',
          background: 'linear-gradient(to left, transparent, oklch(0.76 0.10 75 / 0.4))',
        }}
      />
    </div>
  );
}

export default function ShayariSection() {
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
      { threshold: 0.2 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="shayari"
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        background: 'linear-gradient(180deg, oklch(0.22 0.08 10) 0%, oklch(0.18 0.07 10) 50%, oklch(0.22 0.08 10) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background text */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontFamily: '"Great Vibes", cursive',
          fontSize: '18rem',
          color: 'oklch(0.76 0.10 75 / 0.03)',
          pointerEvents: 'none',
          userSelect: 'none',
          whiteSpace: 'nowrap',
        }}
      >
        Mohabbat
      </div>

      <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            Words from the heart
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
            Shayari & Love Quotes
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

        {/* Shayari cards with ornament dividers */}
        {shayaris.map((shayari, index) => (
          <div key={index}>
            <ShayariCard shayari={shayari} delay={index * 200} />
            {index < shayaris.length - 1 && <Ornament />}
          </div>
        ))}
      </div>
    </section>
  );
}
