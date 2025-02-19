import React, { useEffect, useState } from 'react';
import SideBarES from './SideBarES';
import axios from 'axios';
import '../../Styles/GestionBlessure.css';

function GestionBlessure() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    // Fetch players data initially
    axios
      .get('http://localhost:3000/players')
      .then((res) => {
        // Initialize players with different heart rate bar heights
        const updatedPlayers = res.data.map((p) => ({
          ...p,
          currentHeartRate: Math.floor(Math.random() * 51) + 50, // Random heart rate between 50% and 100%
        }));
        setPlayer(updatedPlayers);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    // Interval to reduce heart rate every 20 seconds
    const interval = setInterval(() => {
      setPlayer((prevPlayers) =>
        prevPlayers.map((p) => {
          const newHeartRate = Math.max(p.currentHeartRate - 5, 0); // Reduce by 5% every 20 seconds, ensure it doesn't go below 0
          return { ...p, currentHeartRate: newHeartRate };
        })
      );
    }, 2000); // 20 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const getBarColor = (heartRate) => {
    if (heartRate > 60) return '#43de06'; // High heart rate: green
    if (heartRate > 30) return 'yellow'; // Medium heart rate: yellow
    return 'red'; // Low heart rate: red
  };

  return (
    <div className='blessure'>
      <SideBarES />
      <div>
        <ul className="player-instructions">
          <li> -Remplacez En-Nassiri par Rahimi, il est plein d'énergie.</li>
          <li> -Remplacez Ounahi, il est sous-performant.</li>
          <li> -Remplacez Akhomach par Diaz, il va briser le bloc.</li>
        </ul>
        <div className="player-list">
          {player.map((p) => (
            <div key={p.id} className="player-card">
              <div className="bar">
                <div
                  className="player-heart-rate-bar"
                  style={{
                    backgroundColor: getBarColor(p.currentHeartRate),
                    height: `${p.currentHeartRate}%`, // Use currentHeartRate for height
                  }}
                ></div>
              </div>
              <div className="player-info">
                <h2 className="player-name">{p.name}</h2>
                <div className="player-image-container">
                  <img src={p.image} alt={`${p.name}`} className="player-image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GestionBlessure;