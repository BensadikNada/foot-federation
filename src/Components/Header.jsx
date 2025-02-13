import React from 'react';
import '../Styles/Header.css';

function Header() {
  return (
    <header className="header">
      <img src="/logo/logo-equipe.png"  alt="Left Logo" className="logo left" />
      <h1 className="header-text">Start The Game</h1>
      <img src="/logo/Logo_Capteurs_portés_par_les_joueurs.png" alt="Right Logo" className="logo right" />
    </header>
  );
}

export default Header;
