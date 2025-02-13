import React from 'react'
import NavRT from '../Components/RealTime/NavRT'
import Footer from '../Components/Footer'
import MainRT from '../Components/RealTime/MainRT'
import Enemies from '../Components/ExpertSystem/Enemies'
import MainMT from '../Components/MedicalTracking/mainMT'
import SideBarRT from '../Components/RealTime/SideBarRT'


function RealTime() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavRT />
      <SideBarRT />
      <div style={{ display: "flex", flex: 1 }}>
        <MainMT />
      </div>
      <Footer />
    </div>
  )
}

export default RealTime