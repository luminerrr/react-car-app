import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import CarCard1 from './components/CarCard1';
import CarCard2 from './components/CarCard2';
import WhyUs from './components/WhyUs';
import Testimonial from './components/Testimonial';
import Faq from './components/Faq';
import Footer from './components/Footer';

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

