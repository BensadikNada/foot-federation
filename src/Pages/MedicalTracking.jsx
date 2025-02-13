import React from 'react'
import Footer from '../Components/Footer'
import NavMT from '../Components/medicalTracking/NavMT';
import SideBarMT from '../Components/medicalTracking/SideBarMT';
import MainMT from '../Components/MedicalTracking/mainMT';

function MedicalTracking() {
  return (
    <div>
        <NavMT/>
        <SideBarMT/>
        <MainMT/>
        <Footer/>
    </div>
  )
}

export default MedicalTracking;