import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavSystem from './components/NavSystem';
import Home from './pages/Home';
import About from './pages/About';
import Academic from './pages/Academic';
import Vibecoding from './pages/Vibecoding';
import Collaborators from './pages/Collaborators';
import CV from './pages/CV';
import Contact from './pages/Contact';

import News from './pages/News';

function App() {
  return (
    <Router>
      <NavSystem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/academic" element={<Academic />} />
        <Route path="/vibecoding" element={<Vibecoding />} />
        <Route path="/collaborators" element={<Collaborators />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />



        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
