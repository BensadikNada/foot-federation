import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../Styles/GestionBlessure.css';
import NavES from "./NavES"
import SideBarES from "./SideBarES";

export default function Enemies() {
    const [enemy, setEnemy] = useState([]); // Initialize as an empty array
    const API_URL = import.meta.env.VITE_API_URL || "https://json-file-asil.onrender.com";

    useEffect(() => {
        axios.get(`${API_URL}/enemies`).then((res) => {
            const updatedPlayers = res.data.map((p) => ({
                ...p,
                currentHeartRate: 100,
            }));
            setEnemy(updatedPlayers);
        })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setEnemy((prevPlayers) =>
                prevPlayers.map((p) => {
                    const newHeartRate = Math.max(p.currentHeartRate - 5, 0);
                    return { ...p, currentHeartRate: newHeartRate };
                })
            );
        }, 20000);

        return () => clearInterval(interval);
    }, []);

    const getBarColor = (heartRate) => {
        if (heartRate > 60) return '#43de06';
        if (heartRate > 30) return 'yellow';
        return 'red';
    };

    return (
        <div className='blessure'>
            <NavES />
            <SideBarES />
            <div>
                <ul className="player-instructions">
                    <li> -GriZman is tired after sprint of 9km put there diaz he can create opportunity</li>
                    <li> -Barcola Play hard Rahimi can get a penalty if he plays next to him</li>
                </ul>
                <div className="player-list">
                    {enemy.map((p) => (
                        <div key={p.id} className="player-card">
                            <div className="bar">
                                <div
                                    className="player-heart-rate-bar"
                                    style={{
                                        backgroundColor: getBarColor(p.currentHeartRate),
                                        height: `${p.currentHeartRate}%`,
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
};
