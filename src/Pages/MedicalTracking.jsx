import React from 'react'
import Footer from '../Components/Footer'
import NavMT from '../Components/MedicalTracking/NavMT';
import SideBarMT from '../Components/MedicalTracking/SideBarMT';
import MainMT from '../Components/MedicalTracking/MainMT';

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