import React from 'react'
import NavER from '../Components/ExpertSystem/NavES'
import Footer from '../Components/Footer'
import GestionBlessure from '../Components/ExpertSystem/GestionBlessure';

function ExpertSystem() {
  return (
    <div>
        <NavER/>
        <GestionBlessure/>
        {/* <br/>
        <br/><br/><br/><br/><br/>
        <Footer/> */}
    </div>
  )
}

export default ExpertSystem;