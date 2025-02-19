import React, { useState } from 'react';
import '../../Styles/NavRT.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import CountUp from '../CountUp';

function NavMT() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <div className='nav-rt'>
        <img src="/logo/logo-equipe.png" alt="logo-equipe" />
        <h3>Suivi médical</h3>
        <div className="small-timer">
        <CountUp showControls={false} />
      </div>
        <div className="dropdown">
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <Link to='/real-time'>Suivi en temps réel</Link>
            <Link to='/expert-system'>Système expert intelligent</Link>
            {/* <Link to="/medical-tracking">Suivi médical</Link> */}
            <Link to="/historical-data" >Données Historiques</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavMT;