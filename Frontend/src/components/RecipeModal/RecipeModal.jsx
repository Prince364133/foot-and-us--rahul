import { useEffect } from 'react';
import './RecipeModal.css';

function RecipeModal({ recipe, onClose }) {
  useEffect(() => {
    if (!recipe) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [recipe, onClose]);

  if (!recipe) return null;

  const { name, region, category, time, difficulty, description, heroNote, image } = recipe;

  return (
    <div className="recipe-modal" role="dialog" aria-modal="true" aria-label={name}>
      <button type="button" className="recipe-modal__backdrop" onClick={onClose} aria-label="Close recipe" />
      <div className="recipe-modal__panel">
        <button type="button" className="recipe-modal__close" onClick={onClose} aria-label="Close">×</button>

        <div className="recipe-modal__media">
          <img src={image} alt={name} />
          <p className="recipe-modal__hero-note">{heroNote}</p>
        </div>

        <div className="recipe-modal__content">
          <span className="eyebrow">{region}</span>
          <h2 className="recipe-modal__title">{name}</h2>

          <div className="recipe-modal__stats">
            <div>
              <span className="recipe-modal__stat-label">Category</span>
              <span className="recipe-modal__stat-value">{category}</span>
            </div>
            <div>
              <span className="recipe-modal__stat-label">Time</span>
              <span className="recipe-modal__stat-value">{time}</span>
            </div>
            <div>
              <span className="recipe-modal__stat-label">Difficulty</span>
              <span className="recipe-modal__stat-value">{difficulty}</span>
            </div>
          </div>

          <p className="recipe-modal__description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeModal;
