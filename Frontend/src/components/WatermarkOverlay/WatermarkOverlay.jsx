import { useEffect, useState } from 'react';
import './WatermarkOverlay.css';


export default function WatermarkOverlay({ delay = 5000 }) {
  const [visible, setVisible] = useState(false);

  /* Show after delay */
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  /* Lock scroll & block keyboard while visible */
  useEffect(() => {
    if (!visible) return;
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.overflow = 'hidden';

    const blockKeys = (e) => { e.preventDefault(); e.stopPropagation(); };
    window.addEventListener('keydown', blockKeys, true);

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);
      window.removeEventListener('keydown', blockKeys, true);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="wm-overlay"
      onContextMenu={(e) => e.preventDefault()}
      onClick={(e) => e.preventDefault()}
    >
      {/* ══════════════ MICROSOFT NAVBAR ══════════════ */}
      <nav className="wm-nav">
        <a className="wm-nav-logo" href="#!">
          {/* MS 4-color logo */}
          <div className="wm-ms-logo">
            <span style={{ background: '#f25022' }} />
            <span style={{ background: '#7fba00' }} />
            <span style={{ background: '#00a4ef' }} />
            <span style={{ background: '#ffb900' }} />
          </div>
          <span className="wm-nav-brand">Microsoft</span>
        </a>

        <ul className="wm-nav-links">
          {['Microsoft 365', 'Azure', 'Copilot', 'Windows', 'Surface', 'Xbox', 'Support'].map((lk) => (
            <li key={lk}><a href="#!">{lk}</a></li>
          ))}
        </ul>

        <div className="wm-nav-right">
          <span className="wm-nav-all">All Microsoft &#8964;</span>
          {/* Search icon */}
          <button className="wm-nav-icon-btn" aria-label="Search">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="6.5" cy="6.5" r="5" stroke="#1a1a1a" strokeWidth="1.5"/>
              <line x1="10.5" y1="10.5" x2="14.5" y2="14.5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          {/* Cart icon */}
          <button className="wm-nav-icon-btn" aria-label="Cart">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1 1h2l2.6 9.4A1 1 0 006.5 11h7a1 1 0 00.96-.73L16 5H4" stroke="#1a1a1a" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7" cy="14.5" r="1" fill="#1a1a1a"/>
              <circle cx="14" cy="14.5" r="1" fill="#1a1a1a"/>
            </svg>
          </button>
          <div className="wm-nav-avatar">ME</div>
        </div>
      </nav>

      {/* ══════════════ HERO SECTION ══════════════ */}
      <section className="wm-hero">
        {/* Left text */}
        <div className="wm-hero-text">
          <h1 className="wm-hero-title">Meet Surface Laptop</h1>
          <p className="wm-hero-desc">
            Unlock AI features like Live Captions and Cocreator with this
            exceptionally powerful laptop.
          </p>
          <a className="wm-btn-learn" href="#!">Learn more</a>
        </div>

        {/* Right visual — laptop illustration */}
        <div className="wm-hero-visual">
          {/* Copilot badge */}
          <div className="wm-copilot-badge">
            <svg width="38" height="38" viewBox="0 0 40 40" fill="none">
              <defs>
                <linearGradient id="cg1" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#2EBCD4"/>
                  <stop offset="100%" stopColor="#1565C0"/>
                </linearGradient>
                <linearGradient id="cg2" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7B2FBE"/>
                  <stop offset="100%" stopColor="#E040FB"/>
                </linearGradient>
                <linearGradient id="cg3" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00C853"/>
                  <stop offset="100%" stopColor="#1DE9B6"/>
                </linearGradient>
                <linearGradient id="cg4" x1="1" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#FF6D00"/>
                  <stop offset="100%" stopColor="#FFAB40"/>
                </linearGradient>
              </defs>
              <path d="M20 6 C28 6,34 12,34 20 C34 14,28 10,20 12 Z" fill="url(#cg1)"/>
              <path d="M34 20 C34 28,28 34,20 34 C26 34,30 28,28 20 Z" fill="url(#cg2)"/>
              <path d="M20 34 C12 34,6 28,6 20 C6 26,12 30,20 28 Z" fill="url(#cg3)"/>
              <path d="M6 20 C6 12,12 6,20 6 C14 6,10 12,12 20 Z" fill="url(#cg4)"/>
              <circle cx="20" cy="20" r="5" fill="white" opacity="0.9"/>
            </svg>
          </div>

          {/* Copilot+ PC label */}
          <div className="wm-copilot-label">Copilot+PC</div>

          {/* Laptop SVG */}
          <div className="wm-laptop-wrap">
            <svg className="wm-laptop-svg" viewBox="0 0 620 480" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="wm-screenBg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1a1a2e"/>
                  <stop offset="100%" stopColor="#16213e"/>
                </linearGradient>
                <radialGradient id="wm-flowerBg" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#2563EB"/>
                  <stop offset="100%" stopColor="#1e40af"/>
                </radialGradient>
                <linearGradient id="wm-laptopBase" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#a8bfcf"/>
                  <stop offset="100%" stopColor="#8aa8bc"/>
                </linearGradient>
                <filter id="wm-shadow">
                  <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgba(80,120,180,0.25)"/>
                </filter>
              </defs>
              <g filter="url(#wm-shadow)">
                <path d="M80 280 L160 30 L560 30 L580 280 Z" fill="#b0c8db"/>
                <path d="M95 270 L168 48 L548 48 L565 270 Z" fill="#1a1a2e"/>
                <path d="M105 262 L172 58 L542 58 L558 262 Z" fill="url(#wm-screenBg)"/>
                <ellipse cx="330" cy="160" rx="120" ry="112" fill="url(#wm-flowerBg)"/>
                {/* Flower petals */}
                {[
                  { color: '#60a5fa', rot: -10 },
                  { color: '#22d3ee', rot: 35, cx: 390, cy: 100 },
                  { color: '#34d399', rot: 80, cx: 418, cy: 155 },
                  { color: '#fbbf24', rot: 125, cx: 395, cy: 212 },
                  { color: '#fb923c', rot: 170, cx: 330, cy: 238 },
                  { color: '#f472b6', rot: 215, cx: 268, cy: 215 },
                  { color: '#a78bfa', rot: 260, cx: 242, cy: 158 },
                  { color: '#60a5fa', rot: 305, cx: 268, cy: 100, op: 0.85 },
                ].map(({ color, rot, cx = 330, cy = 82, op = 0.92 }, i) => (
                  <ellipse key={i} cx={cx} cy={cy} rx="22" ry="40" fill={color} opacity={op}
                    transform={`rotate(${rot} ${cx} ${cy})`}/>
                ))}
                <circle cx="330" cy="160" r="14" fill="white" opacity=".28"/>
                <circle cx="330" cy="54" r="3.5" fill="#2a2a3a"/>
              </g>
              {/* Laptop base */}
              <path d="M55 295 L80 280 L580 280 L605 295 L620 390 L40 390 Z" fill="url(#wm-laptopBase)"/>
              <path d="M80 280 L580 280 L605 295 L55 295 Z" fill="#c0d5e5"/>
              <path d="M40 390 L620 390 L615 400 L45 400 Z" fill="#8aa0b5"/>
              {/* Keyboard */}
              <rect x="100" y="300" width="450" height="68" rx="4" fill="#98b5c8" opacity=".5"/>
              <g fill="#a8c0d0" opacity=".7">
                {[112,134,156,178,200,222,244,266,288,310,332,354,376].map((x) => (
                  <rect key={x} x={x} y="305" width="18" height="10" rx="2"/>
                ))}
                <rect x="398" y="305" width="40" height="10" rx="2"/>
                {[112,164,186,208,230,252,274,296,318,340,362].map((x) => (
                  <rect key={x} x={x} y="319" width="18" height="10" rx="2"/>
                ))}
                <rect x="142" y="319" width="18" height="10" rx="2"/>
                <rect x="384" y="319" width="54" height="10" rx="2"/>
                <rect x="180" y="347" width="200" height="10" rx="2"/>
              </g>
              <rect x="248" y="333" width="154" height="38" rx="6" fill="#90afc0" opacity=".6"/>
              <line x1="80" y1="280" x2="580" y2="280" stroke="#7a9ab0" strokeWidth="2.5"/>
            </svg>
          </div>
        </div>
      </section>
    </div>
  );
}
