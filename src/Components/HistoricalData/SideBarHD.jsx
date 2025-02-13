import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Use useLocation to track current route
import '../../Styles/SideBarRT.css'; // Sidebar styles

function SideBarHD() {
    const location = useLocation();  // Hook to get the current location
    const [active, setActive] = useState('');

    useEffect(() => {
        // Set the active link based on the current location (route)
        if (location.pathname === '/historical-data') {
            setActive('matchReports');
        } else if (location.pathname === '/player-reports') {
            setActive('playerReports');
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
                            to="/historical-data"
                            className={active === 'matchReports' ? 'active' : ''}
                        >
                            Les Rapports De Matchs
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/player-reports"
                            className={active === 'playerReports' ? 'active' : ''}
                        >
                            Les Rapports De Joueurs
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBarHD;
