import { BrowserRouter } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Routing from './routes/Routing';
import React from 'react';
import ResponsiveAppBar from './components/appbar/AppBar';
import Section1 from './components/section1/Section1';
import Section3 from './components/section3/Section3';
import Section4 from './components/section4/Section4';
import Section7 from './components/section7/Section7';
import Section6 from './components/section6/Section6';
import Section9 from './components/section9/Section9';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <ResponsiveAppBar />
      <Section1 />
      <Section3 />
      <Section4 />
      <Section6/>
      <Section7 />
      <Section9/>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
