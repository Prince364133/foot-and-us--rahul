import { useState } from 'react';
import Hero from '../../components/Hero/Hero';
import FeaturedRecipes from '../../components/FeaturedRecipes/FeaturedRecipes';
import RegionalJourney from '../../components/RegionalJourney/RegionalJourney';
import SpiceRack from '../../components/SpiceRack/SpiceRack';
import Ritual from '../../components/Ritual/Ritual';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import { Link } from 'react-router-dom';
import './Home.css';

const PILLARS = [
  {
    step: 'I',
    title: 'Slow, On Purpose',
    copy: 'Dum, dhungar, overnight ferments — timeless techniques that ask for patience, never shortcuts.',
  },
  {
    step: 'II',
    title: 'Regional, Not Generic',
    copy: 'Every recipe is anchored to its state and gharana tradition, never flattened into generic "curry."',
  },
  {
    step: 'III',
    title: 'Written To Actually Cook',
    copy: 'Exact measurements, precise timings, and the secret nuances most recipes online quietly skip.',
  },
];

function Home() {
  const [selected, setSelected] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <main className="home-page">
      <Hero />

      {/* Pillars Section */}
      <section className="story container">
        <div className="story__head text-center">
          <span className="eyebrow">Our Culinary Ethos</span>
          <h2 className="story__section-title">Crafted For Connoisseurs</h2>
        </div>

        <div className="story__grid">
          {PILLARS.map((pillar) => (
            <div className="story__card" key={pillar.title}>
              <div className="story__card-inner">
                <span className="story__roman">{pillar.step}</span>
                <span className="story__mark" aria-hidden="true" />
                <h3 className="story__title">{pillar.title}</h3>
                <p className="story__copy">{pillar.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FeaturedRecipes onSelect={setSelected} />

      {/* Enhanced Royal About Us Section with Inline Expansion */}
      <section className="home-about">
        <div className="container home-about__inner">
          <div className="home-about__image-frame">
            <div className="home-about__img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1000&auto=format&fit=crop"
                alt="Royal Indian Kitchen Spices"
                loading="lazy"
              />
              <div className="home-about__badge">
                <span className="badge-number">100+</span>
                <span className="badge-text">Heritable Recipes</span>
              </div>
            </div>
            <div className="home-about__frame-border" />
          </div>

          <div className="home-about__content">
            <span className="eyebrow">The Legacy</span>
            <h2 className="home-about__title">Resurrecting The Secrets Of Royal Kitchens</h2>
            
            <p className="home-about__lead">
              Food-Qouta;Us was born out of a passion to preserve the sacred, unwritten recipes of Indian royal courts — from the slow-cooked khansamas of Awadh to the aromatic dawat tables of Hyderabad.
            </p>

            <p className="home-about__copy">
              We translate centuries-old royal culinary heritage into precise, approachable masterclasses for the modern home chef. Every dish tells a story of heritage, patience, and grand Indian hospitality.
            </p>

            {/* Expandable Additional Content */}
            <div className={`home-about__extra ${isExpanded ? 'home-about__extra--expanded' : ''}`}>
              <div className="home-about__divider" />
              <p className="home-about__copy">
                Our culinary team travels across royal provinces, interviewing veteran khansamas, royal gharanas, and culinary historians. We document exact spice proportions, secret dum-cooking techniques, and traditional copper vessel marinades that have been guarded for generations.
              </p>
              <div className="home-about__highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">✦</span>
                  <div>
                    <strong>Untranslated Manuscripts</strong>
                    <p>Deciphered ancient royal Persian and Sanskrit culinary texts.</p>
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">✦</span>
                  <div>
                    <strong>Zero Shortcuts</strong>
                    <p>Authentic slow-cooking methods adapted for modern kitchens.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Read More / Read Less Trigger Button */}
            <div className="home-about__cta-row">
              <button 
                type="button" 
                className="btn btn--gold btn--read-more"
                onClick={toggleReadMore}
                aria-expanded={isExpanded}
              >
                <span>{isExpanded ? 'Show Less' : 'Read Full Story'}</span>
                <span className={`btn__arrow ${isExpanded ? 'btn__arrow--up' : ''}`}>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <RegionalJourney />

      <SpiceRack />

      <Ritual />

      

      <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
    </main>
  );
}

export default Home;