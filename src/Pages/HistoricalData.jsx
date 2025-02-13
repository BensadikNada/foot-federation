import React from 'react';
import Footer from '../Components/Footer';
import NavHD from '../Components/HistoricalData/NavHD';
import SideBarHD from '../Components/HistoricalData/SideBarHD';
import HistoriqueDataTable from '../Components/HistoricalData/HistoriqueDataTable';

function HistoricalData() {
  return (
    <div>
      <NavHD />
      <SideBarHD />
      <HistoriqueDataTable/>
      <Footer />
    </div>
  );
}

export default HistoricalData;