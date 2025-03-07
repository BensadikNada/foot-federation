import React from 'react';
import Header from '../Components/Header';
import NavigationButtons from '../Components/NavigationButtons';
import '../Styles/AfterLogin.css';
import ChatBot from '../Components/ChatBot'
import CountUp from '../Components/CountUp';  // Ensure the correct path
import FooterAfterLogin from '../Components/footerAfterlogin';
function AfterLogin() {
  return (
    <div>
      <Header />
      <div className='countup'>
      <CountUp/>
    
      <div className='team'>
      
      <img src="logo/Team-Maroc.png" height={"150px"} alt="" />
      <h4>VS</h4>
      <img src="logo/Team-France.png" height={"150px"}  alt="" />
  
      </div>
      </div>
      <NavigationButtons />
      <FooterAfterLogin />
    </div>
  );
}

export default AfterLogin;