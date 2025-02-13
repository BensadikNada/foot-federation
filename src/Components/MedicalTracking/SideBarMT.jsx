import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Use useLocation to track current route
import '../../Styles/SideBarRT.css'; // Sidebar styles

function SideBarMT() {
    const location = useLocation();  // Hook to get the current location
        const [active, setActive] = useState('');
    
        useEffect(() => {
            // Set the active link based on the current location (route)
            if (location.pathname === '/medical-tracking') {
                setActive('medical');
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
                            to="/medical-tracking"
                            className={active === 'medical' ? 'active' : ''}
                        >
                            LES MATCHS
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default SideBarMT;
