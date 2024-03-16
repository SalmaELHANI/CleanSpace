import './App.css';
import {React , useEffect} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Service from './components/Service';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Reserve from './components/Reservation';
import Hero from './components/Hero';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);
  return (
    <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<Hero />} />
        <Route path='/service' element={<Service />} />
        <Route path='/about' element={<About />} />
        <Route path='/reserve' element={<Reserve />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
