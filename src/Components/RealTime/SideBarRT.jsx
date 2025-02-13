import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Use useLocation to track current route
import '../../Styles/SideBarRT.css'; // Sidebar styles

function SideBarRT() {
    const location = useLocation();  // Hook to get the current location
    const [active, setActive] = useState('');

    useEffect(() => {
        // Set the active link based on the current location (route)
        if (location.pathname === '/real-time') {
            setActive('RealTime');
        } else if (location.pathname === '/construction') {
            setActive('Injery');
        }  else if (location.pathname === '/suivi-position-joueur') {
            setActive('suiviPositionJoueur');
        }else {
            setActive('');
        }
    }, [location]);

    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link
                            to="/real-time"
                            className={active === 'RealTime' ? 'active' : ''}
                        >
                            Statistique en direct
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/suivi-position-joueur"
                            className={active === 'suiviPositionJoueur' ? 'active' : ''}
                        >
                            Suivi des positions des joueurs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/construction"
                            className={active === 'Injery' ? 'active' : ''}
                        >
                            Événements en temps réel
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBarRT;
