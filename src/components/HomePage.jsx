import React from 'react';
import Hero from './Hero';
import About from './About';
import Service from './Service';
import Reservation from './Reservation';

function HomePage() {

  return (
    <>
      <Hero/>
      <About/>
      <Service/>
      <Reservation/>
    </>
  );
}

export default HomePage;
