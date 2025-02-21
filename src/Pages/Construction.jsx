import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faSquare, faRectangleXmark } from '@fortawesome/free-solid-svg-icons';
import SideBarRT from '../Components/RealTime/SideBarRT';
import NavRT from "../Components/RealTime/NavRT";
import '../Styles/Construction.css';
import ChatBot from "../Components/ChatBot";

export default function Construction() {
    const predefinedEvents = [
        { time: "00:00", action: "Start Match", timePercentage: 0 },
        { type: "yellow-card", time: "10:15", player: "Hakimi", timePercentage: 15 },
        { type: "red-card", time: "25:30", player: "Amrabat", timePercentage: 35 },
        { type: "goal", time: "40:00", player: "Diaz", timePercentage: 60 },
        { type: "yellow-card", time: "50:45", player: "Ziyech", timePercentage: 70 },
        { type: "goal", time: "75:20", player: "Hakimi", timePercentage: 85 },
        { time: "90:00", action: "End Match", timePercentage: 100 }
    ];

    const [events, setEvents] = useState([]);
    const [progress, setProgress] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentIndex < predefinedEvents.length) {
                setEvents((prevEvents) => [...prevEvents, predefinedEvents[currentIndex]]);
                setProgress(predefinedEvents[currentIndex].timePercentage);
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
                <h2 style={{color: "white"}}>Match Timeline</h2>
                <div className="timeline">
                    <div className="timeline-progress" style={{ width: `${progress}%` }}></div>
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className={`event ${event.type}`}
                            style={{ left: `${event.timePercentage}%` }}
                        >
                            <div className="event-icon" title={`${event.time} ${event.player || event.action}`}>
                                {event.type === "goal" && <FontAwesomeIcon icon={faFutbol} />}
                                {event.type === "yellow-card" && (
                                    <FontAwesomeIcon icon={faSquare} style={{ color: "#FFEB3B" }} />
                                )}
                                {event.type === "red-card" && (
                                    <FontAwesomeIcon icon={faRectangleXmark} style={{ color: "#FF5722" }} />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="match-time">
                    <span className="start-match">00:00</span>
                    <span className="end-match">90:00</span>
                </div>
            </div>
            
            {/* Event List Display */}
            <div className="event-list-container">
                {events.map((event, index) => (
                    <div key={index} className="event-toast">
                        {event.time} - {event.action || `${event.type} by ${event.player}`}
                    </div>
                ))}
            </div>
            <ChatBot />
        </div>
    );
}