import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/homepage/Navbar';
import CarCard1 from './components/homepage/CarCard1';
import CarCard2 from './components/homepage/CarCard2';
import WhyUs from './components/homepage/WhyUs';
import Testimonial from './components/homepage/Testimonial';
import Faq from './components/homepage/Faq';
import Footer from './components/homepage/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <CarCard1 />
    <CarCard2 />
    <WhyUs />
    <Testimonial />
    <Faq />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

