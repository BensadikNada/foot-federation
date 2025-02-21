import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Styles/Analise.css';
import SideBar from '../Components/RealTime/SideBar';
import SideBarRT from '../Components/RealTime/SideBarRT';
import NavRT from '../Components/RealTime/NavRT';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faBrain, faLungs } from '@fortawesome/free-solid-svg-icons';
import Stats from '../Components/RealTime/Stats';

// Register Chart.js components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function Analise() {
  const { playerId } = useParams();
  const [activeTab, setActiveTab] = useState('heartRate'); // ✅ Fix: Lift state up

  useEffect(() => {
    document.body.style.backgroundColor = 'white';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

  const aggregatedData = {
    labels: ['Heart Rate', 'Body Temperature', 'Speed', 'Distance Covered'],
    datasets: [
      {
        label: `Player Performance`,
        data: [72, 37, 5, 1200],
        backgroundColor: 'rgba(75, 192, 192, 0.4)',
        borderColor: 'rgba(75, 192, 192, 1)',
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.dataset.label || '';
            const value = context.raw;
            const unit =
              context.label === 'Heart Rate'
                ? 'bpm'
                : context.label === 'Body Temperature'
                ? '°C'
                : context.label === 'Speed'
                ? 'm/s'
                : 'm';
            return `${label}: ${value.toFixed(2)} ${unit}`;
          },
        },
      },
      legend: {
        display: true,
        position: 'top',
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      r: {
        beginAtZero: true,
        angleLines: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          backdropColor: 'rgba(255, 255, 255, 0.8)',
        },
      },
    },
    animation: {
      duration: 1000,
    },
  };

  return (
    <div>
      <Stats />
      <div className="center">
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Performance Analysis</h3>

        {/* Navigation Buttons */}
        <div className="nav-buttons">
          <button
            className={activeTab === 'heartRate' ? 'active' : ''}
            onClick={() => setActiveTab('heartRate')}
            style={{ textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faHeartPulse} size="lg" /> Heart Rate
          </button>

          <button
            className={activeTab === 'stressLevel' ? 'active' : ''}
            onClick={() => setActiveTab('stressLevel')}
            style={{ textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faBrain} size="lg" /> Stress Level
          </button>

          <button
            className={activeTab === 'o2Level' ? 'active' : ''}
            onClick={() => setActiveTab('o2Level')}
            style={{ textDecoration: 'none' }}
          >
            <FontAwesomeIcon icon={faLungs} size="lg" /> O2 Level
          </button>
        </div>

        <div style={{ width: '100%', textAlign: 'center', margin: '20px 0' }}></div>

        <div
          style={{
            maxWidth: '600px',
            margin: '20px auto',
            padding: '20px',
            background: '#f9f9f9',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          {/* Pass activeTab as a prop */}
          <SideBar activeTab={activeTab} />
          <SideBarRT />
          <NavRT />
          <div style={{ height: '400px' }}>
            <Radar data={aggregatedData} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analise;