import './Ritual.css';

const STEPS = [
  {
    step: '01',
    title: 'Marinate',
    copy: 'Yogurt, ginger-garlic and spices sit with the protein for hours — this is where flavour actually penetrates deep.',
    tag: 'Flavor Foundation',
  },
  {
    step: '02',
    title: 'Bhunao',
    copy: 'Onions and whole spices are slow-caramelized until oil separates. Skipping this is the most common mistake.',
    tag: 'The Slow Roast',
  },
  {
    step: '03',
    title: 'Dum',
    copy: 'Sealed tight with dough or foil, finishing on its own gentle steam — low, slow, and completely undisturbed.',
    tag: 'Steam Infusion',
  },
  {
    step: '04',
    title: 'Tadka',
    copy: 'A final tempering of hot ghee, whole spices, and garlic, sizzled and poured over the dish just before serving.',
    tag: 'Aromatic Finish',
  },
];

function Ritual() {
  return (
    <section className="ritual">
      {/* Soft Ambient Background Glows */}
      <div className="ritual__bg-glow ritual__bg-glow--1" />
      <div className="ritual__bg-glow ritual__bg-glow--2" />

      <div className="container ritual__head">
        <span className="eyebrow">The Culinary Blueprint</span>
        <h2 className="ritual__title">Four Steps Behind Every Royal Gravy</h2>
        <p className="ritual__copy">
          Different recipes, same core backbone. Master these four timeless techniques, and Indian royal cooking stops feeling like a mystery.
        </p>
      </div>

      <div className="ritual__grid container">
        {STEPS.map((item, index) => (
          <div className="ritual__step" key={item.step} style={{ '--i': index }}>
            <div className="ritual__step-glass">
              {/* Header inside card */}
              <div className="ritual__step-top">
                <span className="ritual__number">{item.step}</span>
                <span className="ritual__tag">{item.tag}</span>
              </div>

              <h3 className="ritual__step-title">{item.title}</h3>
              <p className="ritual__step-copy">{item.copy}</p>

              {/* Flame Icon with Pulsing Effect */}
              <span className="ritual__flame" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M12 2c1 4-3 5-3 9a5 5 0 0 0 10 0c0-2-1-3-2-4 0 2-1 3-2 2 1-3-1-5-3-7Z" />
                </svg>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ritual;