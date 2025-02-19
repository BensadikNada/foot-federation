import React, { useEffect, useState } from 'react';
import '../../Styles/Table.css';

const HistoriqueDataTable = () => {
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
    <div className="table-container1">
      <h2 className="table-title1">Match Details</h2>
      <div className='table'>
        <table className="match-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Competition</th>
              <th>Opponent</th>
              <th>Result</th>
              <th>Match Report</th>
            </tr>
          </thead>
          <tbody>
            {matchData.map((match, index) => (
              <tr key={index}>
                <td>{match.match_date}</td>
                <td>{match.competition}</td>
                <td>{match.opponent}</td>
                <td>{match.match_report.result}</td>
                <td><a href={match.match_report.report_path} target="_blank" rel="noopener noreferrer">View Report</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistoriqueDataTable;