import './RecipeCard.css';

function RecipeCard({ recipe, onSelect }) {
  const { name, region, category, time, tagline, image } = recipe;

  return (
    <article className="recipe-card">
      <button
        type="button"
        className="recipe-card__plate"
        onClick={() => onSelect?.(recipe)}
        aria-label={`View the recipe for ${name}`}
      >
        <span className="recipe-card__plate-ring" aria-hidden="true" />
        <img className="recipe-card__image" src={image} alt={name} loading="lazy" />
      </button>

      <div className="recipe-card__body">
        <div className="recipe-card__meta">
          <span className="recipe-card__region">{region}</span>
          <span className="recipe-card__dot" aria-hidden="true">•</span>
          <span className="recipe-card__time">{time}</span>
        </div>
        <h3 className="recipe-card__title">
          <button type="button" onClick={() => onSelect?.(recipe)}>{name}</button>
        </h3>
        <p className="recipe-card__tagline">{tagline}</p>
        <span className={`recipe-card__tag recipe-card__tag--${category === 'Vegetarian' ? 'veg' : category === 'Dessert' ? 'dessert' : 'nonveg'}`}>
          {category}
        </span>
      </div>
    </article>
  );
}

export default RecipeCard;
