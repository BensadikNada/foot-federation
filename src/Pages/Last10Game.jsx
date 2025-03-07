import SideBarRT from '../Components/RealTime/SideBarRT';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavRT from '../Components/RealTime/NavRT';
import ChatBotComponent from '../Components/ChatBot';
import '../Styles/Last10games.css';

const Last10Game = () => {
    const { playerName } = useParams();
    const [playerData, setPlayerData] = useState([]);

    useEffect(() => {
        axios
            .get('https://json-file-asil.onrender.com/players') // Fetch player data
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="last10games-container">
            <SideBarRT />
            <NavRT />

            <h1 id="head">Last 10 Matches</h1>
            <h2>Achraf Hakimi - Last 4 Matches with Morocco</h2>
            <div className='table-with-national-team'>
                <table className='Table'>
                    <thead>
                        <tr>
                            <th>Match</th>
                            <th>Date</th>
                            <th>Goals</th>
                            <th>Assists</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Morocco vs Team A</td>
                            <td>2023-09-01</td>
                            <td>1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Morocco vs Team B</td>
                            <td>2023-09-08</td>
                            <td>0</td>
                            <td>1</td>
                        </tr>
                        <tr>
                            <td>Morocco vs Team C</td>
                            <td>2023-09-15</td>
                            <td>0</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Morocco vs Team D</td>
                            <td>2023-09-22</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h2>Achraf Hakimi - Last 4 Matches with PSG</h2>
            <table>
                <thead>
                    <tr>
                        <th>Match</th>
                        <th>Date</th>
                        <th>Goals</th>
                        <th>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>PSG vs Team A</td>
                        <td>2023-09-03</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>PSG vs Team B</td>
                        <td>2023-09-10</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>PSG vs Team C</td>
                        <td>2023-09-17</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>PSG vs Team D</td>
                        <td>2023-09-24</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <ChatBotComponent />
        </div>
    );
};

export default Last10Game;