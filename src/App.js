import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Apropos from './components/pages/Apropos';
import Recettes from './components/pages/Recettes';
import Connexion from './components/pages/Connexion';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recettes" element={<Recettes />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/connexion" element={<Connexion />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
