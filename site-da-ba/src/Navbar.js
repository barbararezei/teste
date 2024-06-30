import React from 'react';

function Navbar({ setRoute }) {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => setRoute('home')}>Home</button>
        </li>
        <li>
          <button onClick={() => setRoute('about')}>About</button>
        </li>
        <li>
          <button onClick={() => setRoute('contact')}>Contact</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;