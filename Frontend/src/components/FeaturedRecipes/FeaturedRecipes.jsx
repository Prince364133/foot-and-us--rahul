import { Link } from 'react-router-dom';
import RecipeCard from '../RecipeCard/RecipeCard';
import recipes from '../../data/recipes';
import './FeaturedRecipes.css';

const FEATURED_IDS = ['hyderabadi-biryani', 'butter-chicken', 'malai-kofta', 'masala-dosa'];

function FeaturedRecipes({ onSelect }) {
  const featured = FEATURED_IDS
    .map((id) => recipes.find((recipe) => recipe.id === id))
    .filter(Boolean);

  return (
    <section className="featured">
      <div className="container">
        <div className="featured__head">
          <div>
            <span className="eyebrow">The table is set</span>
            <h2 className="featured__title">Recipes worth the wait</h2>
          </div>
          <Link to="/recipes" className="featured__cta">View the full collection →</Link>
        </div>

        <div className="featured__grid">
          {featured.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onSelect={onSelect} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedRecipes;
