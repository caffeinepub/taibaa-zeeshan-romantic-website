import FloatingHearts from './components/FloatingHearts';
import MusicToggle from './components/MusicToggle';
import HeroSection from './components/HeroSection';
import ApologySection from './components/ApologySection';
import MemoriesGallery from './components/MemoriesGallery';
import LoveLetterSection from './components/LoveLetterSection';
import ShayariSection from './components/ShayariSection';
import DinnerInvitation from './components/DinnerInvitation';
import FinalSection from './components/FinalSection';

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Fixed overlays */}
      <FloatingHearts />
      <MusicToggle />

      {/* Page sections */}
      <main>
        <HeroSection />
        <ApologySection />
        <MemoriesGallery />
        <LoveLetterSection />
        <ShayariSection />
        <DinnerInvitation />
        <FinalSection />
      </main>

      {/* Footer */}
      <footer
        className="py-6 text-center text-sm font-serif"
        style={{ background: 'oklch(0.14 0.06 10)', color: 'oklch(0.76 0.10 75 / 0.6)' }}
      >
        <p>
          Built with{' '}
          <span style={{ color: 'oklch(0.82 0.07 10)' }}>♥</span>{' '}
          using{' '}
          <a
            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'taibaa-zeeshan-romantic')}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'oklch(0.76 0.10 75)', textDecoration: 'underline' }}
          >
            caffeine.ai
          </a>
          {' '}· © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
