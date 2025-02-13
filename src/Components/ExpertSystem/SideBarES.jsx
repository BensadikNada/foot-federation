import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Use useLocation to track current route
import '../../Styles/SideBarRT.css'; // Sidebar styles

function SideBarES() {
    const location = useLocation();  // Hook to get the current location
    const [active, setActive] = useState('');

    useEffect(() => {
        // Set the active link based on the current location (route)
        if (location.pathname === '/expert-system') {
            setActive('gestionBlessure');
        } else if (location.pathname === '/systeme-remplacement') {
            setActive('systeme');
        } else if (location.pathname === '/enemy-team') {
            setActive('enemy');
        } else {
            setActive('');
        }
    }, [location]);

    return (
        <div className='sidebar-container'>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link
                            to="/expert-system"
                            className={active === 'gestionBlessure' ? 'active' : ''}
                        >
                           Conseils tactiques
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/systeme-remplacement"
                            className={active === 'systeme' ? 'active' : ''}
                        >
                            Système de Remplacement
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/enemy-team"
                            className={active === 'enemy' ? 'active' : ''}
                        >
                            Analyse des adversaires
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBarES;
