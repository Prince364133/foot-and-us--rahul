import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 4000);
    }
  };

  return (
    <footer className="site-footer">
      {/* Decorative Top Border */}
      <div className="site-footer__gold-bar" />

      <div className="container site-footer__inner">
        {/* Brand & Mission */}
        <div className="site-footer__brand">
          <Link to="/" className="site-footer__logo">
            <span className="site-footer__brand-text">
              Food<span className="site-footer__amp">Qouta;</span>Us
            </span>
          </Link>
          <p className="site-footer__tag">
            Recipes from India&rsquo;s royal kitchens, curated for the modern home cook.
          </p>

          {/* Social Icons */}
          <div className="site-footer__socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <span className="social-icon">✦</span> Instagram
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <span className="social-icon">✦</span> YouTube
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" aria-label="Pinterest">
              <span className="social-icon">✦</span> Pinterest
            </a>
          </div>
        </div>

        {/* Navigation Sections */}
        <nav className="site-footer__links" aria-label="Footer Navigation">
          <div className="site-footer__col">
            <span className="site-footer__heading">Explore</span>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/recipes">All Recipes</Link></li>
              <li><Link to="/contact">Culinary Studio</Link></li>
            </ul>
          </div>

          <div className="site-footer__col">
            <span className="site-footer__heading">Royal Culinary Regions</span>
            <ul className="site-footer__interactive-list">
              <li><Link to="/recipes?region=punjab">Punjab</Link></li>
              <li><Link to="/recipes?region=awadh">Awadh</Link></li>
              <li><Link to="/recipes?region=hyderabad">Hyderabad</Link></li>
              <li><Link to="/recipes?region=tamil-nadu">Tamil Nadu</Link></li>
            </ul>
          </div>
        </nav>

        {/* Newsletter Subscription Card */}
        <div className="site-footer__newsletter">
          <span className="site-footer__heading">The Royal Gazette</span>
          <p className="site-footer__newsletter-desc">
            Weekly secret recipes and culinary stories delivered straight to your inbox.
          </p>
          <form className="site-footer__form" onSubmit={handleSubscribe}>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="site-footer__sub-btn" aria-label="Subscribe">
                →
              </button>
            </div>
            {subscribed && (
              <p className="site-footer__toast">✦ You've joined the royal table!</p>
            )}
          </form>
        </div>
      </div>

      {/* Decorative Vintage Divider */}
      <div className="site-footer__ornament" aria-hidden="true">
        <svg viewBox="0 0 200 24" preserveAspectRatio="none">
          <path d="M0 12 C 40 -4, 60 28, 100 12 S 160 -4, 200 12" fill="none" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      {/* Legal & Bottom Bar */}
      <div className="site-footer__bottom container">
        <p className="site-footer__legal">
          © {new Date().getFullYear()} Food-Qouta;Us. Crafted with ghee, patience &amp; royal flair.
        </p>
        <div className="site-footer__sublinks">
          <Link to="/privacy">Privacy Policy</Link>
          <span className="dot">•</span>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;