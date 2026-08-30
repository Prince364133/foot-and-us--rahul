import './SpiceRack.css';

const SPICES = [
  {
    name: 'Kashmiri Mirch',
    note: 'Colour more than heat — the red every gravy borrows.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPOCbVR74HBK0LrMxuGaF0Q9OzO973ncZost5Eh2Kh7RtgnWx5PimUoyq4&s=10',
    glowColor: 'rgba(211, 47, 47, 0.4)',
  },
  {
    name: 'Haldi',
    note: 'Earthy, faintly bitter — turmeric ties a dish together.',
    image: 'https://images.pexels.com/photos/7988006/pexels-photo-7988006.jpeg',
    glowColor: 'rgba(255, 179, 0, 0.4)',
  },
  {
    name: 'Jeera',
    note: 'Toasted cumin, the first thing to hit hot oil.',
    image: 'https://images.pexels.com/photos/33751744/pexels-photo-33751744.jpeg',
    glowColor: 'rgba(121, 85, 72, 0.4)',
  },
  {
    name: 'Elaichi',
    note: 'Green cardamom — perfume for both curry and dessert.',
    image: 'https://images.pexels.com/photos/8217944/pexels-photo-8217944.jpeg',
    glowColor: 'rgba(76, 175, 80, 0.4)',
  },
  {
    name: 'Saunf',
    note: 'Fennel, sweet and cooling against a hard chilli hit.',
    image: 'https://dakshinspices.com/wp-content/uploads/2024/05/fennel-seeds-1.png',
    glowColor: 'rgba(139, 195, 74, 0.4)',
  },
  {
    name: 'Kali Mirch',
    note: 'Black pepper — the heat Indian food used before chillies arrived.',
    image: 'https://thewholesaler.in/cdn/shop/products/Black-Pepper-Powder-Kali-Mirch-Piper-nigrum-TheWholesalerCo-35822926_460x@2x.jpg?v=1755872909',
    glowColor: 'rgba(66, 66, 66, 0.4)',
  },
];

function SpiceRack() {
  return (
    <section className="spice-rack">
      <div className="container spice-rack__head">
        <span className="eyebrow">The Masala Box</span>
        <h2 className="spice-rack__title">Six Spices, Every Kitchen</h2>
        <p className="spice-rack__copy">
          Hover over a jar to unlock its culinary secrets — see why each spice belongs in your dish.
        </p>
      </div>

      <div className="spice-rack__grid container">
        {SPICES.map((spice, index) => (
          <div 
            className="spice" 
            key={spice.name} 
            style={{ '--i': index, '--glow-color': spice.glowColor }}
          >
            <div className="spice__jar">
              <span className="spice__lid" aria-hidden="true" />
              <div className="spice__jar-inner">
                <img src={spice.image} alt={spice.name} loading="lazy" />
                <div className="spice__glare" />
              </div>
              <div className="spice__note">
                <p>{spice.note}</p>
              </div>
            </div>
            <span className="spice__name">{spice.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SpiceRack;