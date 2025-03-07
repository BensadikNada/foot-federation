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
  BarElement,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Radar, Bar, Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faBrain, faLungs } from '@fortawesome/free-solid-svg-icons';
import Stats from '../Components/RealTime/Stats';
import { Pie } from 'react-chartjs-2';
import { ArcElement } from 'chart.js';
import ChatBotComponent from '../Components/ChatBot';


ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
ChartJS.register(ArcElement);
function Analise() {
  const { playerId } = useParams();
  const [activeTab, setActiveTab] = useState('heartRate'); 
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
  const [barData, setBarData] = useState({
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  });
  
  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  const [lineData, setLineData] = useState({
    labels: ['Match 1', 'Match 2', 'Match 3', 'Match 4', 'Match 5', 'Match 6'],
    datasets: [
      {
        label: 'Goals Scored',
        data: [1, 2, 0, 3, 1, 2],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
        fill: true,
      },
      {
        label: 'Assists',
        data: [0, 1, 1, 2, 1, 0],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  });
  
  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  const [pieData, setPieData] = useState({
    labels: ['Wins', 'Losses', 'Draws'],
    datasets: [
      {
        label: 'Match Results',
        data: [10, 5, 3],
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(255, 206, 86, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  });
  
  const pieOptions = {
    responsive: true,
    maintainAspectRatio: false,
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
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '20px',
            padding: '50px', 
            borderRadius: '10px',
          }}
          className='graphs'
        >
          {/* Pass activeTab as a prop */}
          <SideBar activeTab={activeTab} />
          <SideBarRT />
          <NavRT />
       

        

          <div style={{ flex: '1 1 300px', height: '300px' }} >
            <Radar data={aggregatedData} options={options} />
          </div>
          <div style={{ flex: '1 1 300px', height: '300px' }}>
            <Bar data={barData} options={barOptions} />
          </div>
          <div style={{ flex: '1 1 300px', height: '300px' }}>
            <Line data={lineData} options={lineOptions} />
          </div>
          <div style={{ flex: '1 1 300px', height: '300px' }}>
            <Pie data={pieData} options={pieOptions} />
          </div>

          
        </div>
      </div>
 
      <ChatBotComponent/>
    </div>
  );
}

export default Analise;