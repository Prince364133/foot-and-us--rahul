import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Recipes from './pages/Recipes/Recipes';
import Contact from './pages/Contact/Contact';
import NotFound from './pages/NotFound/NotFound';
import WatermarkOverlay from './components/WatermarkOverlay/WatermarkOverlay';
import ScamPopup from './components/ScamPopup/ScamPopup';

import './App.css';

function App() {
  return (
    <div className="app-shell">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
       <WatermarkOverlay delay={2000} />
       <ScamPopup delay={2200} /> 
      
    </div>
  );
}

export default App;
