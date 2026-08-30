// Central recipe data. Swap image URLs for your own photography when ready —
// each entry just needs a stable id, since RecipeCard and the detail
// sections both key off it.

const recipes = [
  {
    id: 'hyderabadi-biryani',
    name: 'Hyderabadi Dum Biryani',
    region: 'Telangana',
    category: 'Non-Vegetarian',
    time: '90 min',
    difficulty: 'Ambitious',
    tagline: 'Basmati and marinated mutton, sealed and slow-steamed under dough.',
    description:
      "Layers of long-grain basmati and yogurt-marinated mutton are stacked in a heavy-bottomed handi, crowned with fried onions, mint and saffron milk, then sealed with a wheat-dough lid so the dish finishes entirely on its own steam. What comes to the table is a dum biryani in the old Nizami style — each grain separate, each bite carrying a different note of the marinade beneath it.",
    heroNote: 'Sealed under dough, opened at the table.',
    image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    region: 'Punjab',
    category: 'Non-Vegetarian',
    time: '55 min',
    difficulty: 'Weeknight',
    tagline: 'Char-grilled tandoori chicken folded into a velvet tomato-butter gravy.',
    description:
      "Born in the kitchens of old Delhi as a way to use leftover tandoori chicken, this gravy has since become the dish most of the world means when it says 'Indian food.' Charred chicken thighs are simmered in a gravy of blistered tomatoes, cream and a spoon of honey to round the acidity, finished with a knob of butter stirred in off the heat so it never splits.",
    heroNote: 'Finished with butter off the heat, never boiled again.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'paneer-tikka',
    name: 'Paneer Tikka',
    region: 'North India',
    category: 'Vegetarian',
    time: '40 min',
    difficulty: 'Weeknight',
    tagline: 'Smoked paneer and peppers, charred over an open flame.',
    description:
      "Cubes of fresh paneer are marinated in whisked yogurt, ginger-garlic and a blend of roasted spices, then threaded with onion and bell pepper and set directly over flame or a hot grill pan until the edges char. A final smoking with a coal and a spoon of ghee — the dhungar method — carries the tandoor's smoke indoors.",
    heroNote: 'Smoked at home with a live coal and a drop of ghee.',
    image: 'https://images.pexels.com/photos/33430558/pexels-photo-33430558.jpeg',
  },
  {
    id: 'dal-makhani',
    name: 'Dal Makhani',
    region: 'Punjab',
    category: 'Vegetarian',
    time: '8 hrs (mostly resting)',
    difficulty: 'Patient',
    tagline: 'Whole black lentils, simmered overnight into velvet.',
    description:
      "Whole urad lentils and a handful of kidney beans are soaked overnight, then simmered for hours with tomato, ginger and butter until the starches break down into a gravy with body rather than water. Restaurant versions rush this with cream; the honest version earns its silk from time on low heat, finished with a slow swirl of butter just before serving.",
    heroNote: 'The silk comes from hours on the flame, not a ladle of cream.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'malai-kofta',
    name: 'Malai Kofta',
    region: 'Awadh',
    category: 'Vegetarian',
    time: '65 min',
    difficulty: 'Ambitious',
    tagline: 'Fried potato-paneer dumplings, drowned in a cashew-cream gravy.',
    description:
      "Grated paneer and boiled potato are bound with a little cornflour, stuffed with a sliver of dried fruit, and fried to a lace-brown crust before being lowered into a gravy built from cashew paste, browned onions and a whisper of nutmeg. A dish from the Awadhi royal kitchens, designed to prove a vegetarian table could still feel like a feast.",
    heroNote: 'A vegetarian dish built to feel like a royal feast.',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'chettinad-chicken',
    name: 'Chettinad Chicken',
    region: 'Tamil Nadu',
    category: 'Non-Vegetarian',
    time: '50 min',
    difficulty: 'Weeknight',
    tagline: 'Stone-ground pepper, star anise and coconut, cooked hard and fast.',
    description:
      "The Chettiar merchant families built their cooking around a masala of dry-roasted spices — black pepper, star anise, stone flower, fennel — ground fresh and bloomed in oil before the chicken ever enters the pan. No cream, no cashew paste, just coconut for body and a heat that builds in waves rather than announcing itself at once.",
    heroNote: 'Fresh-ground spice, no cream — heat that builds in waves.',
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?q=80&w=1400&auto=format&fit=crop',
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    region: 'Pan-Indian',
    category: 'Dessert',
    time: '45 min',
    difficulty: 'Weeknight',
    tagline: 'Milk-solid dumplings, fried gold and soaked in rose-cardamom syrup.',
    description:
      "Khoya is worked into a soft dough with a little flour, rolled into cracked-free balls, and fried low and slow until they take on a deep mahogany colour throughout — not just on the surface. Straight from the oil they go into a warm syrup steeped with cardamom and a trace of rosewater, where they drink in liquid until they nearly double in size.",
    heroNote: 'Fried low and slow until the colour runs all the way through.',
    image: 'https://images.pexels.com/photos/15014919/pexels-photo-15014919.jpeg',
  },
  {
    id: 'masala-dosa',
    name: 'Masala Dosa',
    region: 'Karnataka',
    category: 'Vegetarian',
    time: '30 min (plus fermenting)',
    difficulty: 'Patient',
    tagline: 'A fermented rice crepe, shattering-crisp, wrapped around spiced potato.',
    description:
      "Rice and urad dal are soaked, ground and left to ferment overnight until the batter turns faintly sour and full of air. Spread thin across a hot griddle with the back of a ladle, it crisps at the edges while staying tender in the centre, then folds around a turmeric-yellow potato filling tempered with mustard seed and curry leaf.",
    heroNote: 'A batter fermented overnight, spread paper-thin by hand.',
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?q=80&w=1400&auto=format&fit=crop',
  },
];

export default recipes;
