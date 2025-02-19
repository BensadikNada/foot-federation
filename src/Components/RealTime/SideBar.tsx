import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import HeartRate from './HeartPulse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartPulse, 
  faChevronRight, 
  faChevronLeft, 
  faBrain, 
  faLungs 
} from '@fortawesome/free-solid-svg-icons';

const SideBar = ({ activeTab }) => {
  const { playerId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [heartRates, setHeartRates] = useState([]);
  const [currentHRIndex, setCurrentHRIndex] = useState(0);
  const [playerName, setPlayerName] = useState('');
  const [stressLevel, setStressLevel] = useState(50);
  const [o2Level, setO2Level] = useState(85); // Default O₂ level

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        const player = data.players.find((p) => p.id.toString() === playerId);
        if (player) {
          setPlayerName(player.name);
          setHeartRates(player.records.map(record => record.physiologicalParameters.heartRate));
        }
      })
      .catch((error) => console.error('Error fetching player data:', error));
  }, [playerId]);

  useEffect(() => {
    if (heartRates.length > 0) {
      const interval = setInterval(() => {
        setCurrentHRIndex((prevIndex) => (prevIndex + 1) % heartRates.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [heartRates]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`SideBar ${isOpen ? 'open' : ''}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faChevronLeft : faChevronRight} />
      </button>

      <div className="SideBar-contents">
        <h2>Health Monitor</h2>

        {/* Show Content Based on activeTab */}
        {activeTab === 'heartRate' && (
          <>
            {heartRates.length > 0 ? (
              <p className="Heart">
                <strong>{playerName}'s HR: </strong> {heartRates[currentHRIndex]}  <FontAwesomeIcon className="iconRT heart-pulse-icon" id='heart' icon={faHeartPulse} />
              </p>
            ) : (
              <p>Loading heart rate...</p>
            )}
            <HeartRate />
          </>
        )}

        {/* Stress Level Slider */}
        {activeTab === 'stressLevel' && (
          <div className="stress-slider-container">
            <label className="stress-label">Stress Level</label>
            <input 
              type="range" 
              className="stress-slider" 
              min="0" 
              max="100" 
              value={stressLevel} 
            />
            <p className="stress-value">{stressLevel}%</p>
          </div>
        )}

        {/* Oxygen Level Indicator (Samsung Watch Style) */}
        {activeTab === 'o2Level' && (
          <div className="o2-level-container">
            <div className="o2-circle" style={{ background: `conic-gradient(#ffffff ${o2Level}%, rgba(255, 255, 255, 0.2) ${o2Level}% 100%)` }}>
              <div className="o2-inner-circle">
                <p className="o2-level-text">{o2Level}%</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
