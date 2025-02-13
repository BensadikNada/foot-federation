import React from 'react';
import NavRT from '../Components/RealTime/NavRT'
import SideBarRT from '../Components/RealTime/SideBarRT'
import Footer from '../Components/Footer'
import FootBallField from '../Components/RealTime/FootBallField'
function Injury() {
  return (
    <div >
      <NavRT/>
      <FootBallField/>
        <SideBarRT/>
        <Footer/>
    </div>
  )
}

export default Injury