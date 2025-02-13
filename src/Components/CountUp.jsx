import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons'; // Import the icons
import '../Styles/CountUp.css';

function CountUp() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); // State to control if the timer is running

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer); // Cleanup on component unmount
  }, [running]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(time % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleStartPause = () => {
    setRunning((prevRunning) => !prevRunning); // Toggle running state
  };

  return (
    <div className="timer-container">
      <button className="start-pause-btn" onClick={handleStartPause}>
        <FontAwesomeIcon icon={running ? faPause : faPlay} /> {/* Switch icon based on running state */}
      </button>
      <div className="timer">{formatTime(time)}</div>
    </div>
  );
}

export default CountUp;
