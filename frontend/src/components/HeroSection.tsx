export default function HeroSection() {
  const scrollToApology = () => {
    const el = document.getElementById('apology');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url(/assets/generated/hero-candlelight.dim_1920x1080.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark maroon overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, oklch(0.14 0.06 10 / 0.65) 0%, oklch(0.18 0.07 10 / 0.75) 60%, oklch(0.14 0.06 10 / 0.9) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: '2rem 1.5rem',
          maxWidth: '800px',
        }}
      >
        {/* Decorative top ornament */}
        <div className="animate-hero-in" style={{ marginBottom: '1.5rem' }}>
          <span style={{ color: 'oklch(0.76 0.10 75)', fontSize: '1.5rem', letterSpacing: '0.5rem' }}>
            ✦ ❤ ✦
          </span>
        </div>

        <h1
          className="animate-hero-in"
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
            fontWeight: 600,
            color: 'oklch(0.86 0.08 75)',
            lineHeight: 1.2,
            marginBottom: '1.5rem',
            textShadow: '0 0 30px oklch(0.76 0.10 75 / 0.6), 0 0 60px oklch(0.76 0.10 75 / 0.3)',
            letterSpacing: '0.02em',
          }}
        >
          To My Beautiful Wife, Taibaa ❤️
        </h1>

        <p
          className="animate-hero-in-delay"
          style={{
            fontFamily: '"Great Vibes", cursive',
            fontSize: 'clamp(1.4rem, 3.5vw, 2.2rem)',
            color: 'oklch(0.88 0.05 10)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            textShadow: '0 0 20px oklch(0.82 0.07 10 / 0.5)',
          }}
        >
          This is not just a website…<br />
          This is Zeeshan's heart speaking.
        </p>

        <div className="animate-hero-in-delay-2">
          <button
            onClick={scrollToApology}
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.1rem',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '0.9rem 2.8rem',
              background: 'transparent',
              border: '1.5px solid oklch(0.76 0.10 75)',
              color: 'oklch(0.86 0.08 75)',
              cursor: 'pointer',
              borderRadius: '2px',
              transition: 'all 0.4s ease',
              boxShadow: '0 0 20px oklch(0.76 0.10 75 / 0.2), inset 0 0 20px oklch(0.76 0.10 75 / 0.05)',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              const btn = e.currentTarget;
              btn.style.background = 'oklch(0.76 0.10 75 / 0.15)';
              btn.style.boxShadow = '0 0 35px oklch(0.76 0.10 75 / 0.5), inset 0 0 20px oklch(0.76 0.10 75 / 0.1)';
              btn.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              const btn = e.currentTarget;
              btn.style.background = 'transparent';
              btn.style.boxShadow = '0 0 20px oklch(0.76 0.10 75 / 0.2), inset 0 0 20px oklch(0.76 0.10 75 / 0.05)';
              btn.style.transform = 'translateY(0)';
            }}
          >
            Open My Heart
          </button>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-hero-in-delay-2"
          style={{ marginTop: '3rem', color: 'oklch(0.76 0.10 75 / 0.5)', fontSize: '1.5rem' }}
        >
          <span style={{ animation: 'heartBeat 2s ease-in-out infinite', display: 'inline-block' }}>↓</span>
        </div>
      </div>
    </section>
  );
}
