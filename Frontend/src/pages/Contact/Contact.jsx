import { useState } from 'react';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null); // holds a snapshot of what was sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = 'Please tell us your name.';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.';
    if (!form.message.trim()) next.message = "Don't forget your message.";
    return next;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });

      const data = await response.json();

      if (data.success) {
        setSubmittedData(form); // snapshot the data before we clear the form
        setSubmitted(true);
        setForm(INITIAL_FORM);
      } else if (data.errors) {
        setErrors(data.errors);
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Network error:', err);
      alert('Could not reach the server. Is the backend running?');
    }
  };

  const handleSendAnother = () => {
    setSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container contact-hero__inner">
          <span className="eyebrow">We'd love to hear from you</span>
          <h1 className="contact-hero__title">Let's Talk Food</h1>
          <p className="contact-hero__copy">
            A recipe that didn't quite work, a family heirloom dish you'd like to see documented, 
            or a private dining inquiry — our kitchen doors are always open.
          </p>
        </div>
      </section>

      {/* Main Body Grid */}
      <section className="contact-body container">
        
        {/* Info Column */}
        <div className="contact-info">
          <div className="contact-info__card">
            <h3 className="contact-info__heading">Reach The Studio</h3>
            
            <div className="contact-info__block">
              <span className="contact-info__label">Direct Line / Email</span>
              <a href="mailto:hello@foodqouta.example" className="contact-info__value contact-info__link">
                hello@foodqouta.example
              </a>
            </div>

            <div className="contact-info__block">
              <span className="contact-info__label">Culinary Studio</span>
              <p className="contact-info__value">
                Suite 402, Mehrauli Heritage District<br />
                New Delhi 110030, India
              </p>
            </div>

            <div className="contact-info__block">
              <span className="contact-info__label">Kitchen Hours</span>
              <p className="contact-info__value">Monday – Saturday, 10am – 6pm IST</p>
            </div>
          </div>

          {/* Luxury Interactive Map Container */}
          <div className="contact-map">
            <div className="contact-map__glass">
              <div className="contact-map__pin">
                <span className="contact-map__pulse" />
                <span className="contact-map__label">Food&Us Studio</span>
              </div>
            </div>
            {/* Embedded Google Map iframe */}
            <iframe
              title="Studio Location"
              src="https://maps.google.com/maps?q=Mehrauli,New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>

        {/* Form Column */}
        <div className="contact-form-wrapper">
          {submitted ? (
            /* ---- Acknowledgment view (replaces the form after a successful submit) ---- */
            <div className="contact-ack">
              <div className="contact-ack__icon">✦</div>
              <h2 className="contact-ack__title">Your message is on its way!</h2>
              <p className="contact-ack__copy">
                Thank you, {submittedData?.name} — your note has reached the kitchen.
                We'll write back to <strong>{submittedData?.email}</strong> within 24 hours.
              </p>

              <div className="contact-ack__summary">
                <div className="contact-ack__row">
                  <span className="contact-ack__label">Name</span>
                  <span className="contact-ack__value">{submittedData?.name}</span>
                </div>
                <div className="contact-ack__row">
                  <span className="contact-ack__label">Email</span>
                  <span className="contact-ack__value">{submittedData?.email}</span>
                </div>
                {submittedData?.subject && (
                  <div className="contact-ack__row">
                    <span className="contact-ack__label">Subject</span>
                    <span className="contact-ack__value">{submittedData.subject}</span>
                  </div>
                )}
                <div className="contact-ack__row contact-ack__row--message">
                  <span className="contact-ack__label">Message</span>
                  <span className="contact-ack__value">{submittedData?.message}</span>
                </div>
              </div>

              <button type="button" className="btn btn--gold" onClick={handleSendAnother}>
                <span>Send Another Message</span>
              </button>
            </div>
          ) : (
            /* ---- The form itself ---- */
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form__header">
                <h2>Send A Note</h2>
                <p>Fill out the details below and our team will get back to you within 24 hours.</p>
              </div>

              <div className="contact-form__field">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="e.g. Gayatri Devi"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'has-error' : ''}
                />
                {errors.name && <span className="contact-form__error">{errors.name}</span>}
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="gayatri@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'has-error' : ''}
                />
                {errors.email && <span className="contact-form__error">{errors.email}</span>}
              </div>

              <div className="contact-form__field">
                <label htmlFor="subject">Subject (Optional)</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Recipe inquiry, Collaboration..."
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Tell us what's on your mind..."
                  value={form.message}
                  onChange={handleChange}
                  className={errors.message ? 'has-error' : ''}
                />
                {errors.message && <span className="contact-form__error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn--gold contact-form__btn">
                <span>Send Message</span>
                <span className="btn__arrow">→</span>
              </button>
            </form>
          )}
        </div>

      </section>
    </main>
  );
}

export default Contact;