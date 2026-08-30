import { useMemo, useState } from 'react';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import RecipeModal from '../../components/RecipeModal/RecipeModal';
import recipes from '../../data/recipes';
import './Recipes.css';

const FILTERS = ['All', 'Vegetarian', 'Non-Vegetarian', 'Dessert'];

function Recipes() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(null);

  const visible = useMemo(() => {
    return recipes.filter((recipe) => {
      const matchesFilter = activeFilter === 'All' || recipe.category === activeFilter;
      const matchesQuery =
        query.trim() === '' ||
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.region.toLowerCase().includes(query.toLowerCase());
      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, query]);

  return (
    <main className="recipes-page">
      <section className="recipes-hero">
        <div className="container recipes-hero__inner">
          <span className="eyebrow">The full collection</span>
          <h1 className="recipes-hero__title">Every Recipe, Every Region</h1>
          <p className="recipes-hero__copy">
            From an eight-hour dal to a forty-minute tikka — search or filter to find
            what fits your evening.
          </p>
        </div>
      </section>

      <section className="recipes-controls container">
        <div className="recipes-controls__filters" role="tablist" aria-label="Filter recipes by category">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              className={`recipes-controls__filter ${activeFilter === filter ? 'recipes-controls__filter--active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        <label className="recipes-controls__search">
          <span className="sr-only">Search recipes</span>
          <input
            type="search"
            placeholder="Search by dish or region…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
      </section>

      <section className="recipes-grid container">
        {visible.length > 0 ? (
          visible.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onSelect={setSelected} />
          ))
        ) : (
          <p className="recipes-grid__empty">No recipes match that search yet — try another dish or region.</p>
        )}
      </section>

      <RecipeModal recipe={selected} onClose={() => setSelected(null)} />
    </main>
  );
}

export default Recipes;
