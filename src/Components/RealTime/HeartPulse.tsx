import { color } from 'chart.js/helpers';
import React from 'react';

const HeartRate: React.FC = () => {
  return (
    <div className="heart-rate" >
      <img src="https://media.tenor.com/0XjJbBPcNocAAAAM/heartbeat-pulse.gif" alt="Heart Pulse Animation" style={{ width: '150px', height: '100px', borderColor: "blue", borderWidth: "5px", borderRadius: "5px" }} />
    
    </div>
  );
};

export default HeartRate;