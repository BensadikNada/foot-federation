import React from 'react';
import '../Styles/NavigationButtons.css';
import { Link } from 'react-router';

function NavigationButtons() {
  return (
    <div className='container1'>
      <br /><br /> 
      <div id="timer">
    
      </div>
    <div className="navigation-buttons">
      <Link className='nav-btn' to='/real-time'>Suivi en temps réel</Link>
      <Link className='nav-btn' to='/expert-system'>Système expert intelligent</Link>
      <Link className="nav-btn" to="/medical-tracking">Suivi médical</Link>
      <Link className="nav-btn" to="/historical-data" >Données Historiques</Link>
    </div></div>
  );
}

export default NavigationButtons;
