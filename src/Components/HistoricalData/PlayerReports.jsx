import React, { useEffect, useState } from 'react';
import '../../Styles/Table.css';
import NavHD from './NavHD';
import SideBarHD from './SideBarHD';
import Footer from '../Footer';
import ChatBotComponent from '../ChatBot';

const PlayerReports = () => {
    const [matchData, setMatchData] = useState([]);

    const API_URL = import.meta.env.VITE_API_URL || "https://json-file-asil.onrender.com";

    useEffect(() => {
        fetch(`${API_URL}/matches`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setMatchData(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
        <div className="table-container">
            <NavHD />
            <SideBarHD />
            <h3 className="table-title">Player Reports</h3>
            <div className="table">
                {matchData.map((match, matchIndex) => (
                    <div key={matchIndex}>
                        <h4 className='title'>{match.competition} / {match.opponent}</h4>
                        <table className="match-table">
                            <thead>
                                <tr>
                                    <th>Player Name</th>
                                    <th>Report</th>
                                </tr>
                            </thead>
                            <tbody>
                                {match.player_reports.map((player, playerIndex) => (
                                    <tr key={`${matchIndex}-${playerIndex}`}>
                                        <td>{player.player_name}</td>
                                        <td><a href={player.report_path} target="_blank" rel="noopener noreferrer">View Report</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
            
        </div>
        <ChatBotComponent />
        <Footer />
        </div>
  

    );
};

export default PlayerReports;