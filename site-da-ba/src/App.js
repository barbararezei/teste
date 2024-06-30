import React, { useState } from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Contact from './Contact';

function App() {
  const [route, setRoute] = useState('home');

  return (
    <div>
      <Navbar setRoute={setRoute} />
      {route === 'home' && <Home />}
      {route === 'about' && <About />}
      {route === 'contact' && <Contact />}
    </div>
  );
}

export default App;