import './RegionalJourney.css';

const REGIONS = [
  {
    name: 'Punjab',
    note: 'Tandoors, butter-rich gravies, wheat over rice.',
    dish: 'Signature: Butter Chicken',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Awadh',
    note: 'Mughal courts refined into dum-cooked restraint.',
    dish: 'Signature: Malai Kofta',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Hyderabad',
    note: 'Deccan spice trade, biryani sealed under dough.',
    dish: 'Signature: Dum Biryani',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Tamil Nadu',
    note: 'Pepper, tamarind and coconut, ground fresh daily.',
    dish: 'Signature: Chettinad Chicken',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=900&auto=format&fit=crop',
  },
  {
    name: 'Karnataka',
    note: 'Fermented batters, tempered with mustard and curry leaf.',
    dish: 'Signature: Masala Dosa',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=900&auto=format&fit=crop',
  },
];

function RegionalStop({ region, index, decorative = false }) {
  return (
    <div
      className="journey__stop"
      role={decorative ? undefined : 'listitem'}
      aria-hidden={decorative || undefined}
      style={{ '--i': index }}
    >
      <span className="journey__node" aria-hidden="true">
        <span className="journey__node-pulse" />
      </span>
      <div className="journey__card">
        <span className="journey__seal" aria-hidden="true">
          {String((index % REGIONS.length) + 1).padStart(2, '0')}
        </span>
        <div className="journey__card-media">
          <img src={region.image} alt="" loading="lazy" />
          <div className="journey__card-shade" />
          <span className="journey__card-dish">{region.dish}</span>
        </div>
        <div className="journey__card-body">
          <h3>{region.name}</h3>
          <p>{region.note}</p>
        </div>
        <span className="journey__card-glow" aria-hidden="true" />
      </div>
    </div>
  );
}

function RegionalJourney() {
  return (
    <section className="journey">
      <div className="container journey__head">
        <span className="eyebrow">A spice route</span>
        <h2 className="journey__title">One Country, A Thousand Kitchens</h2>
        <p className="journey__copy">
          Every state cooks with a different hand. Hover a stop to see its
          signature dish — the route keeps moving on its own.
        </p>
      </div>

      <div className="journey__track" role="list">
        <div className="journey__track-inner">
          <div className="journey__line" aria-hidden="true" />
          {REGIONS.map((region, index) => (
            <RegionalStop region={region} index={index} key={region.name} />
          ))}
          {REGIONS.map((region, index) => (
            <RegionalStop region={region} index={index + REGIONS.length} decorative key={`${region.name}-dup`} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default RegionalJourney;