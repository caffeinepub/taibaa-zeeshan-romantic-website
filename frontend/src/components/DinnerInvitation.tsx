import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin } from 'lucide-react';

interface BurstHeart {
  id: number;
  tx: string;
  ty: string;
  size: number;
  duration: number;
}

export default function DinnerInvitation() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [yesClicked, setYesClicked] = useState(false);
  const [forgivenClicked, setForgivenClicked] = useState(false);
  const [burstHearts, setBurstHearts] = useState<BurstHeart[]>([]);

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

  const handleYesClick = () => {
    setYesClicked(true);

    // Create burst hearts
    const newHearts: BurstHeart[] = Array.from({ length: 16 }, (_, i) => {
      const angle = (i / 16) * 360;
      const distance = 60 + Math.random() * 80;
      const rad = (angle * Math.PI) / 180;
      return {
        id: Date.now() + i,
        tx: `${Math.cos(rad) * distance}px`,
        ty: `${Math.sin(rad) * distance}px`,
        size: 12 + Math.random() * 12,
        duration: 0.6 + Math.random() * 0.4,
      };
    });

    setBurstHearts(newHearts);
    setTimeout(() => setBurstHearts([]), 1200);
  };

  return (
    <section
      id="dinner"
      ref={sectionRef}
      style={{
        padding: 'clamp(4rem, 8vw, 7rem) 1.5rem',
        background: 'linear-gradient(135deg, oklch(0.93 0.03 60) 0%, oklch(0.92 0.04 10) 50%, oklch(0.96 0.02 75) 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '22rem',
          color: 'oklch(0.82 0.07 10 / 0.06)',
          pointerEvents: 'none',
          userSelect: 'none',
        }}
      >
        🍽
      </div>

      <div
        ref={contentRef}
        className="fade-in-up"
        style={{
          maxWidth: '700px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Ornament */}
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ color: 'oklch(0.76 0.10 75)', fontSize: '1.5rem', letterSpacing: '0.4rem' }}>
            ✦ ✦ ✦
          </span>
        </div>

        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(1.8rem, 4.5vw, 3rem)',
            fontWeight: 600,
            color: 'oklch(0.28 0.09 10)',
            marginBottom: '1.5rem',
            letterSpacing: '0.02em',
            lineHeight: 1.2,
          }}
        >
          Will You Go On A Date With Me Again?
        </h2>

        <div
          style={{
            width: '80px',
            height: '2px',
            background: 'linear-gradient(to right, transparent, oklch(0.76 0.10 75), transparent)',
            margin: '0 auto 2rem',
          }}
        />

        <p
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(1.1rem, 2.5vw, 1.35rem)',
            color: 'oklch(0.35 0.07 10)',
            lineHeight: 2,
            fontStyle: 'italic',
            marginBottom: '2.5rem',
          }}
        >
          Let's begin again.<br />
          Just you and me.<br />
          No ego. No misunderstandings.<br />
          <strong style={{ fontStyle: 'normal', color: 'oklch(0.28 0.09 10)', fontWeight: 600 }}>
            Only love.
          </strong>
        </p>

        {/* Date & Location */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
            marginBottom: '3rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'oklch(0.28 0.09 10 / 0.08)',
              border: '1px solid oklch(0.76 0.10 75 / 0.3)',
              borderRadius: '50px',
              padding: '0.75rem 2rem',
            }}
          >
            <Calendar size={20} style={{ color: 'oklch(0.76 0.10 75)' }} />
            <span
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'oklch(0.28 0.09 10)',
                letterSpacing: '0.1em',
              }}
            >
              28 / 03 / 2026
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              background: 'oklch(0.28 0.09 10 / 0.08)',
              border: '1px solid oklch(0.76 0.10 75 / 0.3)',
              borderRadius: '50px',
              padding: '0.75rem 2rem',
            }}
          >
            <MapPin size={20} style={{ color: 'oklch(0.76 0.10 75)' }} />
            <span
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: 'oklch(0.28 0.09 10)',
                letterSpacing: '0.1em',
              }}
            >
              Nagpur
            </span>
          </div>
        </div>

        <p
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
            color: 'oklch(0.38 0.09 10)',
            marginBottom: '2.5rem',
          }}
        >
          Let me take you out… and show you how much you mean to me.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            alignItems: 'center',
          }}
        >
          {/* Yes button */}
          <div style={{ position: 'relative', display: 'inline-block' }}>
            {/* Burst hearts */}
            {burstHearts.map((heart) => (
              <span
                key={heart.id}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  fontSize: `${heart.size}px`,
                  color: 'oklch(0.82 0.07 10)',
                  pointerEvents: 'none',
                  zIndex: 10,
                  animation: `burstHeart ${heart.duration}s ease-out forwards`,
                  '--tx': heart.tx,
                  '--ty': heart.ty,
                } as React.CSSProperties}
              >
                ❤
              </span>
            ))}

            <button
              onClick={handleYesClick}
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: '1.2rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                padding: '1rem 3rem',
                background: 'linear-gradient(135deg, oklch(0.28 0.09 10) 0%, oklch(0.38 0.10 12) 100%)',
                border: '1.5px solid oklch(0.76 0.10 75 / 0.5)',
                color: 'oklch(0.86 0.08 75)',
                cursor: 'pointer',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 20px oklch(0.28 0.09 10 / 0.3)',
                animation: yesClicked ? 'heartBeat 0.6s ease' : undefined,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px) scale(1.05)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 30px oklch(0.28 0.09 10 / 0.4), 0 0 20px oklch(0.76 0.10 75 / 0.3)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0) scale(1)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 20px oklch(0.28 0.09 10 / 0.3)';
              }}
            >
              {yesClicked ? '❤️ Yes, Always! ❤️' : 'Yes ❤️'}
            </button>
          </div>

          {/* Forgive button */}
          <button
            onClick={() => setForgivenClicked(true)}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1rem',
              fontStyle: 'italic',
              letterSpacing: '0.05em',
              padding: '0.75rem 2rem',
              background: 'transparent',
              border: '1px solid oklch(0.28 0.09 10 / 0.3)',
              color: 'oklch(0.38 0.08 10)',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.76 0.10 75 / 0.5)';
              (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.28 0.09 10)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = 'oklch(0.28 0.09 10 / 0.3)';
              (e.currentTarget as HTMLButtonElement).style.color = 'oklch(0.38 0.08 10)';
            }}
          >
            I Already Forgive You
          </button>

          {/* Forgiven message */}
          {forgivenClicked && (
            <div
              style={{
                marginTop: '0.5rem',
                padding: '1rem 2rem',
                background: 'oklch(0.28 0.09 10 / 0.06)',
                border: '1px solid oklch(0.76 0.10 75 / 0.3)',
                borderRadius: '4px',
                animation: 'fadeInHero 0.6s ease forwards',
              }}
            >
              <p
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                  color: 'oklch(0.28 0.09 10)',
                }}
              >
                That means everything to me. ❤️
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
