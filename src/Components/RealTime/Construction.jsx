import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faSquare, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import SideBarRT from './SideBarRT';
import NavRT from "./NavRT";
import '../../Styles/Construction.css';

export default function Construction() {
    const predefinedEvents = [
        { time: "00:00", action: "Start Match", timePercentage: 5 },
        { type: "yellow-card", time: "10:15", player: "Hakimi", timePercentage: 15 },
        { type: "red-card", time: "25:30", player: "Amrabat", timePercentage: 35 },
        { type: "goal", time: "40:00", player: "Diaz", timePercentage: 60 },
        { type: "yellow-card", time: "50:45", player: "Ziyech", timePercentage: 70 },
        { type: "goal", time: "75:20", player: "Hakimi", timePercentage: 85 },
        { time: "90:00", action: "End Match", timePercentage: 95 }
    ];

    const [events, setEvents] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < predefinedEvents.length) {
                setEvents((prevEvents) => [...prevEvents, predefinedEvents[currentIndex]]);
                setCurrentIndex((prevIndex) => prevIndex + 1);
            } else {
                clearInterval(interval);
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [currentIndex, predefinedEvents.length]);

    return (
        <div className="blessure">
            <NavRT />
            <SideBarRT />
            <div className="timeline-container">
                <h2>Événements en temps réel</h2>
                <div className="match">
                    <span className="start-match">Start Match</span>
                    <span className="end-match">End Match</span>
                </div>
                <div className="timeline">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`event ${event.type}`}
                            style={{ left: `${event.timePercentage}%` }}
                        >
                            <div className="event-icon">
                                {event.type === "goal" && <FontAwesomeIcon icon={faFutbol} />}
                                {event.type === "yellow-card" && (
                                    <FontAwesomeIcon icon={faSquare} style={{ color: "#FFEB3B" }} />
                                )}
                                {event.type === "red-card" && (
                                    <FontAwesomeIcon icon={faRectangleXmark} style={{ color: "#FF5722" }} />
                                )}
                            </div>
                            <div className="event-details">
                                <span className="event-action" style={{ color: "#340303", fontWeight: "bold" }}>{event.action}</span>
                                <span className="event-time">{event.time} {event.player}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
