import React from 'react'
import NavRT from '../Components/RealTime/NavRT'
import Footer from '../Components/Footer'
import MainRT from '../Components/RealTime/MainRT'
import SideBarRT from '../Components/RealTime/SideBarRT'
import ChatBot from '../Components/ChatBot'


function RealTime() {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <NavRT />
      <SideBarRT />
      <div style={{ display: "flex", flex: 1 }}>
        <MainRT />
        
      </div>
      <ChatBot/>
      <Footer />
    </div>
  )
}

export default RealTime