import React from 'react';
import SideBarES from './SideBarES';
import NavES from './NavES';
import '../../Styles/Remplacement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const getBarColor = (value) => {
    if (value > 75) return '#43de06';
    if (value > 50) return 'yellow';
    return 'red';
};

const Remplacement = () => {
    return (
        <div>
            <NavES />
            <SideBarES />
            <div className='remplacement'>
                <div className='goalKeeper'>
                    <h3>Goalkeeper</h3>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(54),
                                    height: `${50}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Yassine Bounou</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/bono.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                    <div className='triangle'>
                        <div className="triangle-green"></div>
                        <div className="triangle-red"></div>
                    </div>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(80),
                                    height: `${80}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Munir Elkajoui</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/munir.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='goalKeeper'>
                    <h3>Defender</h3>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(23),
                                    height: `${23}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Achraf Hakimi</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/hakimi.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                    <div className='triangle'>
                        <div className="triangle-green"></div>
                        <div className="triangle-red"></div>
                    </div>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(80),
                                    height: `${80}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Yahya Attiat Allah</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/AttiyatAllah.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='goalKeeper'>
                    <h3>Forward</h3>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(30),
                                    height: `${30}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Hakim Ziyach</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/ziyech.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                    <div className='triangle'>
                        <div className="triangle-green"></div>
                        <div className="triangle-red"></div>
                    </div>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(80),
                                    height: `${80}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Youssed En-Nesyri</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/En-Nesyri.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='goalKeeper'>
                    <h3>Midfielder</h3>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(55),
                                    height: `${50}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Brahim Diaz</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/Brahim.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                    <div className='triangle'>
                        <div className="triangle-green"></div>
                        <div className="triangle-red"></div>
                    </div>
                    <div className="goalKeeper-card">
                        <div className="goalKeeper-bar">
                            <div
                                className="goalKeeper-performance-bar"
                                style={{
                                    backgroundColor: getBarColor(80),
                                    height: `${80}%`,
                                }}
                            ></div>
                        </div>
                        <div className="goalKeeper-info">
                            <h2 className="goalKeeper-name">Bilal Elkhannouss</h2>
                            <div className="goalKeeper-image-container">
                                <img src="players_image/khannouss.png" alt="bounou" className="goalKeeper-image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Remplacement;