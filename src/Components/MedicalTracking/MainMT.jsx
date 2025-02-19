import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faTachometerAlt, faFutbol, faTemperatureHalf, faHexagonNodes, faLungs, faTint, faDumbbell, faVial } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/MainRT.css';

function MainMT() {
    const [players, setPlayers] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    useEffect(() => {
        axios
            .get('http://localhost:3000/players')
            .then((res) => {
                setPlayers(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredPlayers = players.filter((p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search by name..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
        <div>
            
            <div className="mainRT-container">
                {filteredPlayers.map((p) => (
                    <div
                        key={p.id}
                        className="player-container"
                        onClick={() => setSelectedPlayer(p)}
                    >
                        <h2 className="name">{p.name}</h2>
                        <ul className="information">
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faHeartPulse} /> {p.records[0]?.physiologicalParameters?.heartRate} bpm
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faTachometerAlt} /> {p.records[0]?.physiologicalParameters?.bloodPressure} mmHg
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faFutbol} /> {p.records[0]?.technicalPerformanceParameters?.passingAccuracy} %
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faTemperatureHalf} /> {p.records[0]?.physiologicalParameters?.bodyTemperature} °c
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faHexagonNodes} /> {p.records[0]?.movementAndSpeedParameters?.totalDistanceCovered} km
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faLungs} /> {p.records[0]?.physiologicalParameters?.respiratoryRate} breaths/min
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faTint} /> {p.records[0]?.physiologicalParameters?.hydrationLevel} %
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faDumbbell} /> {p.records[0]?.physiologicalParameters?.muscleOxygenation} %
                            </li>
                            <li>
                                <FontAwesomeIcon className="iconRT" icon={faVial} /> {p.records[0]?.physiologicalParameters?.lactateThreshold} mmol/L
                            </li>
                        </ul>
                        <div className="image">
                            <img src={p.image} alt="player" />
                        </div>
                    </div>
                ))}
            </div>

            {selectedPlayer && (
                <div className="popup-overlay" onClick={() => setSelectedPlayer(null)}>
                    <div className="popup" onClick={(e) => e.stopPropagation()}>
                        <div
                            className="player-container large"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <h2 className="name">{selectedPlayer.name}</h2>
                            <ul className="information">
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faHeartPulse} /> {selectedPlayer.records[0]?.physiologicalParameters?.heartRate} bpm
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faTachometerAlt} /> {selectedPlayer.records[0]?.physiologicalParameters?.bloodPressure} mmHg
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faFutbol} /> {selectedPlayer.records[0]?.technicalPerformanceParameters?.passingAccuracy} %
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faTemperatureHalf} /> {selectedPlayer.records[0]?.physiologicalParameters?.bodyTemperature} °c
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faHexagonNodes} /> {selectedPlayer.records[0]?.movementAndSpeedParameters?.totalDistanceCovered} km
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faLungs} /> {selectedPlayer.records[0]?.physiologicalParameters?.respiratoryRate} breaths/min
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faTint} /> {selectedPlayer.records[0]?.physiologicalParameters?.hydrationLevel} %
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faDumbbell} /> {selectedPlayer.records[0]?.physiologicalParameters?.muscleOxygenation} %
                                </li>
                                <li>
                                    <FontAwesomeIcon className="iconRT" icon={faVial} /> {selectedPlayer.records[0]?.physiologicalParameters?.lactateThreshold} mmol/L
                                </li>
                            </ul>
                            <div className="image">
                                <img src={selectedPlayer.image} alt="player" />
                            </div>
                            <button className="close-button" onClick={() => setSelectedPlayer(null)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
}

export default MainMT;