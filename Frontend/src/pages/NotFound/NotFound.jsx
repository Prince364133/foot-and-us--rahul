import { Link } from 'react-router-dom';
import './NotFound.css';

function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found__inner container">
        <span className="eyebrow">Empty plate</span>
        <h1 className="not-found__title">404</h1>
        <p className="not-found__copy">
          This dish isn't on the menu. The page you're looking for may have moved
          or never existed.
        </p>
        <Link to="/" className="btn btn--gold">Back to the Home</Link>
      </div>
    </main>
  );
}

export default NotFound;
