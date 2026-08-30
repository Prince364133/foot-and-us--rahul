import { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | error | success

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('success');
    setEmail('');
  };

  return (
    <section className="newsletter">
      <div className="container newsletter__inner">
        <div className="newsletter__copy">
          <span className="eyebrow">One recipe a week</span>
          <h2 className="newsletter__title">Sunday Supper Notes</h2>
          <p className="newsletter__text">
            A single recipe, its story, and the one mistake most people make with it —
            straight to your inbox, every Sunday morning.
          </p>
        </div>

        <form className="newsletter__form" onSubmit={handleSubmit} noValidate>
          <div className="newsletter__field">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setStatus('idle'); }}
              aria-label="Email address"
            />
            <button type="submit" className="btn btn--gold">Subscribe</button>
          </div>
          {status === 'error' && <p className="newsletter__message newsletter__message--error">Please enter a valid email.</p>}
          {status === 'success' && <p className="newsletter__message newsletter__message--success">You're on the list — welcome to the table.</p>}
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
