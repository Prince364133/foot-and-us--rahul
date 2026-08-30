import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

// Rotating hero backdrop — each frame is a different note of the feast.
const SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2000&auto=format&fit=crop',
    caption: 'A royal thali, plated the old way',
  },
  {
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2000&auto=format&fit=crop',
    caption: 'Dum biryani, sealed under dough',
  },
  {
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=2000&auto=format&fit=crop',
    caption: 'Spice, ground fresh for every pot',
  },
  {
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=2000&auto=format&fit=crop',
    caption: 'Coal and flame — the tandoor at work',
  },
];

const SLIDE_DURATION = 5200;

function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
    return () => window.clearInterval(timerRef.current);
  }, []);

  const goTo = (index) => {
    setActive(index);
    window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, SLIDE_DURATION);
  };

  return (
    <section className="hero">
      <div className="hero__media" aria-hidden="true">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.image}
            className={`hero__slide ${index === active ? 'hero__slide--active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        <div className="hero__media-overlay" />
        <div className="hero__grain" />
      </div>

      <div className="hero__embers" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} className="hero__ember" style={{ '--i': i }} />
        ))}
      </div>

      <div className="hero__frame" aria-hidden="true">
        <svg className="hero__corner hero__corner--tl" viewBox="0 0 90 90"><path d="M2 88V22C2 10 10 2 22 2h66" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
        <svg className="hero__corner hero__corner--tr" viewBox="0 0 90 90"><path d="M88 88V22C88 10 80 2 68 2H2" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
        <svg className="hero__corner hero__corner--bl" viewBox="0 0 90 90"><path d="M2 2v66c0 12 8 20 20 20h66" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
        <svg className="hero__corner hero__corner--br" viewBox="0 0 90 90"><path d="M88 2v66c0 12-8 20-20 20H2" fill="none" stroke="currentColor" strokeWidth="1.2" /></svg>
      </div>

      <div className="hero__content container">
        <span className="eyebrow hero__eyebrow hero__reveal" style={{ '--delay': '0ms' }}>
          Recipes from the royal kitchens of India
        </span>
        <h1 className="hero__title">
          <span className="hero__reveal" style={{ '--delay': '90ms' }}>A Feast,</span>{' '}
          <span className="hero__title-script hero__reveal" style={{ '--delay': '180ms' }}>Plated</span>
          <br />
          <span className="hero__reveal" style={{ '--delay': '270ms' }}>With Reverence</span>
        </h1>
        <p className="hero__subtitle hero__reveal" style={{ '--delay': '380ms' }}>
          Slow-built gravies, coal-smoked tandoor, hand-folded biryani —
          Food-Qouta gathers the recipes worth cooking for the people you love,
          written the way the grandmothers who taught them would want them told.
        </p>
        <div className="hero__actions hero__reveal" style={{ '--delay': '480ms' }}>
          <Link to="/recipes" className="btn btn--gold">Explore the recipes</Link>
          <Link to="/contact" className="btn btn--ghost">Get in touch</Link>
        </div>

        <div className="hero__dots" role="tablist" aria-label="Hero background slides">
          {SLIDES.map((slide, index) => (
            <button
              key={slide.image}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={slide.caption}
              className={`hero__dot ${index === active ? 'hero__dot--active' : ''}`}
              onClick={() => goTo(index)}
            >
              <span className="hero__dot-fill" style={index === active ? { animationDuration: `${SLIDE_DURATION}ms` } : undefined} />
            </button>
          ))}
        </div>
      </div>

      <p className="hero__caption" key={active}>{SLIDES[active].caption}</p>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-line" />
        <span className="hero__scroll-label">Scroll</span>
      </div>
    </section>
  );
}

export default Hero;
