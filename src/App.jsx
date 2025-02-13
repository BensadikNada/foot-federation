import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import AfterLogin from './Pages/AfterLogin';
import RealTime from './Pages/RealTime';
import Injery from './Pages/Injery';
import ExpertSystem from './Pages/ExpertSystem';
import Enemies from './Components/ExpertSystem/Enemies';
import HistoricalData from './Pages/HistoricalData';
import MedicalTracking from './Pages/MedicalTracking';
import Construction from './Components/RealTime/Construction';
import Remplacement from './Components/ExpertSystem/Remplacement';
import PlayerReports from './Components/HistoricalData/PlayerReports';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/afterlogin" element={<AfterLogin />} />
        <Route path='/real-time' element={<RealTime/>}/>
        <Route path='/suivi-position-joueur' element={<Injery/>}/>
        <Route path='/Injery' element={<Injery/>}/>
        <Route path='/enemy-team' element={<Enemies/>}/>
        <Route path='/expert-system' element={<ExpertSystem/>}/>
        <Route path='/historical-data' element={<HistoricalData/>}/>
        <Route path='/medical-tracking' element={<MedicalTracking/>}/>
        <Route path='/construction' element={<Construction/>}/>
        <Route path='/systeme-remplacement' element={<Remplacement/>}/>
        <Route path='/player-reports' element={<PlayerReports/>}/>
      </Routes>
    </Router>
  );
}

export default App;
