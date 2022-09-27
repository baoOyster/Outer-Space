import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../HomePage/HomePage';
import { Destination } from '../Destination/Destination';
import { Header } from '../Header/Header';
import { Crew } from '../Crew/Crew';
import { Tech } from '../Tech/Tech';
import { useEffect, useState } from 'react';
// import background for changing background
import homePageDesktop from '../../assets/home/background-home-desktop.jpg';
import homePageTablet from '../../assets/home/background-home-tablet.jpg';
import homePageMobile from '../../assets/home/background-home-mobile.jpg';
import destinationDesktop from '../../assets/destination/background-destination-desktop.jpg';
import destinationTablet from '../../assets/destination/background-destination-tablet.jpg';
import destinationMobile from '../../assets/destination/background-destination-mobile.jpg';
import crewDesktop from '../../assets/crew/background-crew-desktop.jpg';
import crewTablet from '../../assets/crew/background-crew-tablet.jpg';
import crewMobile from '../../assets/crew/background-crew-mobile.jpg';
import techDesktop from '../../assets/technology/background-technology-desktop.jpg';
import techTablet from '../../assets/technology/background-technology-tablet.jpg';
import techMobile from '../../assets/technology/background-technology-mobile.jpg';

const background = {
  homePage: {
    desktop: homePageDesktop,
    tablet: homePageTablet,
    mobile: homePageMobile
  }, 
  destination: {
    desktop: destinationDesktop,
    tablet: destinationTablet,
    mobile: destinationMobile
  },
  crew: {
    desktop: crewDesktop,
    tablet: crewTablet,
    mobile: crewMobile
  },
  tech: {
    desktop: techDesktop,
    tablet: techTablet,
    mobile: techMobile
  }
  
}

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />}/>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/destination" element={<Navigate replace to="/destination/moon" />}/>
        <Route path="/destination/:planetname" element={<Destination />}/>
        <Route path="/crew" element={<Navigate replace to="/crew/commander" />}/>
        <Route path="/crew/:crewjob" element={<Crew />}/>
        <Route path="/tech" element={<Navigate replace to="/tech/vehicle" />}/>
        <Route path="/tech/:recenttech" element={<Tech />}/>
      </Routes>
    </Router>
  );
}

export default App;
