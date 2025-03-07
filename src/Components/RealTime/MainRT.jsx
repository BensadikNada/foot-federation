import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faBullseye, faRunning, faTemperatureHalf, faHexagonNodes } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/MainRT.css';
import SideBarRT from './SideBarRT';

function MainRT() {
  const [players, setPlayers] = useState([]);
  const [recordIndex, setRecordIndex] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  const API_URL = import.meta.env.VITE_API_URL || "https://json-file-asil.onrender.com";

  useEffect(() => {
    axios
      .get(`${API_URL}/players`)
      .then((res) => {
        setPlayers(res.data);
        const initialIndex = res.data.reduce((acc, player) => {
          acc[player.id] = 0;
          return acc;
        }, {});
        setRecordIndex(initialIndex);
      })
      .catch((err) => {
        console.error("API Error:", err);
      });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRecordIndex((prevIndex) => {
        const newIndex = { ...prevIndex };
        players.forEach((player) => {
          if (player.records && player.records.length > 0) {
            newIndex[player.id] = (newIndex[player.id] + 1) % player.records.length;
          }
        });
        return newIndex;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [players]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPlayers = players.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SideBarRT />
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="mainRT-container">
        {filteredPlayers.map((p) => {
          const currentRecord = p.records[recordIndex[p.id]] || {};
            return (
            <div key={p.id} className="player-container">
              <h2 className="name">{p.name}</h2>
              <ul className="information">
              <li>
                <FontAwesomeIcon className="iconRT heart-pulse-icon" icon={faHeartPulse} />{' '}
                {currentRecord.physiologicalParameters?.heartRate} bpm
              </li>
              <li>
                <FontAwesomeIcon className="iconRT" icon={faBullseye} />{' '}
                {currentRecord.technicalPerformanceParameters?.passingAccuracy} %
              </li>
              <li>
                <FontAwesomeIcon className="iconRT running-pulse-icon" icon={faRunning} />{' '}
                {currentRecord.movementAndSpeedParameters?.instantaneousSpeed} km/h
              </li>
              <li>
                <FontAwesomeIcon className="iconRT" icon={faTemperatureHalf} />{' '}
                {currentRecord.physiologicalParameters?.bodyTemperature} °c
              </li>
              </ul>
              <div className="image">
              <img src={p.image} alt="player" />
              <span>
                <FontAwesomeIcon className="iconRT" icon={faHexagonNodes} />{' '}
                {currentRecord.movementAndSpeedParameters?.totalDistanceCovered} km
              </span>
              </div>
              {/* Pass player ID via Link */}
              <Link to={`/analise/${p.id}`} className="analyze-link" style={{textDecoration: "none"}}>
              Analyze Performance
              </Link>
              <Link to={`/last-10-matches/${p.name}`} className='last-10-games-link' style={{textDecoration: "none"}}>
              Laste Matches
              </Link>
             
            </div>
            );
        })}
      </div>
    </div>
  );
}

export default MainRT;