import { useEffect, useState } from 'react';
import './Testimonials.css';

const QUOTES = [
  {
    quote: "The dal makhani recipe finally explained why my restaurant version never tasted right — it was the hours, not the cream.",
    name: 'Ritika Malhotra',
    context: 'Home cook, Pune',
  },
  {
    quote: "I made the Chettinad chicken for my in-laws' first visit. My mother-in-law asked for the recipe before dessert.",
    name: 'Arjun Nair',
    context: 'Home cook, Bengaluru',
  },
  {
    quote: "First site that told me why my dosa batter never fermented properly in winter. Small detail, completely changed the result.",
    name: 'Sana Sheikh',
    context: 'Home cook, Lucknow',
  },
];

const ROTATE_MS = 6000;

function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setActive((i) => (i + 1) % QUOTES.length);
    }, ROTATE_MS);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <section className="testimonials">
      <div className="container testimonials__inner">
        <span className="eyebrow">From the community table</span>
        <div className="testimonials__stage">
          <span className="testimonials__mark" aria-hidden="true">&ldquo;</span>
          {QUOTES.map((item, index) => (
            <blockquote
              key={item.name}
              className={`testimonials__quote ${index === active ? 'testimonials__quote--active' : ''}`}
              aria-hidden={index !== active}
            >
              <p>{item.quote}</p>
              <footer>
                <span className="testimonials__name">{item.name}</span>
                <span className="testimonials__context">{item.context}</span>
              </footer>
            </blockquote>
          ))}
        </div>

        <div
          className="testimonials__dots"
          style={{ '--rotate-ms': `${ROTATE_MS}ms` }}
          key={active}
        >
          {QUOTES.map((item, index) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              className={`testimonials__dot ${index === active ? 'testimonials__dot--active' : ''}`}
              onClick={() => setActive(index)}
            >
              <span className="testimonials__dot-fill" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;