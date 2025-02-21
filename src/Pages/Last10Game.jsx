import React from 'react';
import SideBarRT from '../Components/RealTime/SideBarRT';
import NavRT from '../Components/RealTime/NavRT';

const Last10Game = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "#f0f0f0", color: "#333", paddingLeft: "40px",paddingRight: '40px',paddingTop:"5%",paddingBottom:"20%",height:'100%' ,marginLeft: "234px"}}>
            <SideBarRT />
            <NavRT />
            <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "20px" }}>Last 10 Matches</h1>
            <h2 style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}>Achraf Hakimi - Last 4 Matches with Morocco</h2>
            <div className='table-with-national-team'>
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", color: "#333", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                    <tr style={{ backgroundColor: "#340303", color: "white" }}>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Match</th>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Date</th>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Goals</th>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>Morocco vs Team A</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-01</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>Morocco vs Team B</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-08</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>Morocco vs Team C</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-15</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>Morocco vs Team D</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-22</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <h2 style={{ textAlign: "center", marginTop: "40px", marginBottom: "20px" }}>Achraf Hakimi - Last 4 Matches with PSG</h2>
            <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", color: "#333", boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)" }}>
                <thead>
                    <tr style={{ backgroundColor: "#340303", color: "white" }}>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Match</th>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Date</th>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Goals</th>
                        <th style={{ padding: "5px", border: "1px solid #ddd" }}>Assists</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>PSG vs Team A</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-03</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>PSG vs Team B</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-10</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>PSG vs Team C</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-17</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                    </tr>
                    <tr>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>PSG vs Team D</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>2023-09-24</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>1</td>
                        <td style={{ padding: "5px", border: "1px solid #ddd" }}>0</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Last10Game;