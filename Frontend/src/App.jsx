import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import AlertDemo from './pages/AlertDemo/AlertDemo';

import './App.css';

function FoodLayout({ children }) {
  return (
    <div className="app-shell">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Isolated routes for the overlay and security alert popups */}
      <Route path="/alert" element={<AlertDemo />} />
      <Route path="/security-alert" element={<AlertDemo />} />

      {/* Pure Food&Us pages (clean with no popups) */}
      <Route path="/" element={<FoodLayout><Home /></FoodLayout>} />
      <Route path="/recipes" element={<FoodLayout><Recipes /></FoodLayout>} />
      <Route path="/contact" element={<FoodLayout><Contact /></FoodLayout>} />
      <Route path="*" element={<FoodLayout><NotFound /></FoodLayout>} />
    </Routes>
  );
}

export default App;
