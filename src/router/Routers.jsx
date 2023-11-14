/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, BrowserRouter as Router, Routes,Link } from 'react-router-dom'; // Import BrowserRouter as Router

import Generate from '../components/generator/Generator';
import GenerateThen from '../components/generatedThen/GenerateThen';
import Exp from '../components/exp/Exp';
import Services from '../pages/Services.jsx';
import Contact from '../pages/contact-us';
import AboutUs from '../pages/about-us';

const Routers = () => {
  return (
    <Routes>
      {/* <Link to="/generate">Generate</Link> */}
      <Route path='/' element={<Exp />} />
      <Route path='/generate' element={<Generate />} />
      <Route path='/generate/:qrCodeId' element={<Generate />} />
      <Route path='/generated-then' element={<GenerateThen/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/contact-us' element={<Contact/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
    </Routes>
  );
};

export default Routers;
