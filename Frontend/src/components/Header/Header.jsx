import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Recipes', to: '/recipes' },
  { label: 'Contact', to: '/contact' },
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      <div className="site-header__bar container">
        
        
       {/* Brand Logo */}
<NavLink to="/" className="site-header__brand" onClick={() => setMenuOpen(false)}>
  <span className="site-header__brand-mark" aria-hidden="true">
    <img src="/logo.png" alt="FoodQouta logo" style={{ height: '50px', width: 'auto' }} />
  </span>
  <span className="site-header__brand-text">
    Food<span className="site-header__brand-amp">Qouta</span>
  </span>
</NavLink>

        {/* Main Navigation */}
        <nav className={`site-header__nav ${menuOpen ? 'site-header__nav--open' : ''}`} aria-label="Primary">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) => 
                    `site-header__link ${isActive ? 'site-header__link--active' : ''}`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div className="site-header__mobile-cta">
            <NavLink to="/contact" className="btn-header-cta" onClick={() => setMenuOpen(false)}>
              Get In Touch
            </NavLink>
          </div>
        </nav>

        {/* Action Button & Toggle */}
        <div className="site-header__actions">
          <NavLink to="/recipes" className="btn-header-cta desktop-only">
            <span>Explore Menu</span>
          </NavLink>

          <button
            type="button"
            className={`site-header__toggle ${menuOpen ? 'site-header__toggle--open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

      </div>
    </header>
  );
}

export default Header;