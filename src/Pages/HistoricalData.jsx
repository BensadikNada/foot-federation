import React from 'react';
import Footer from '../Components/Footer';
import NavHD from '../Components/HistoricalData/NavHD';
import SideBarHD from '../Components/HistoricalData/SideBarHD';
import HistoriqueDataTable from '../Components/HistoricalData/HistoriqueDataTable';
import ChatBotComponent from '../Components/ChatBot';

function HistoricalData() {
  return (
    <div>
      <NavHD />
      <SideBarHD />
      <HistoriqueDataTable/>
      <ChatBotComponent />
      <Footer />
    </div>
  );
}

export default HistoricalData;