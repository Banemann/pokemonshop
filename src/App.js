import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Kontakt from './pages/Kontakt';
import Omos from './pages/Omos';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/omos" element={<Omos />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
