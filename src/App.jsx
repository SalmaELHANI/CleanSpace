import './App.css';
import { React, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Providers } from './store/Provider.jsx';
import store from "./store/Store.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

import HomePage from './components/HomePage';
import Service from './components/Service';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Reserve from './components/Reservation';
import Hero from './components/Hero';
import LoginAdmin from './components/LoginAdmin.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import DashboardRoutes from './dashboard/DashboardRoutes.jsx';

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
    <Providers store={store}>
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home' element={<Hero />} />
          <Route path='/service' element={<Service />} />
          <Route path='/about' element={<About/>} />
          <Route path='/reserve' element={<Reserve/>} />
          <Route path='/pageAdmin' element={<LoginAdmin/>} />
          <Route path='/dashboard/*' element={<DashboardRoutes/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Providers>
    
  );
}

export default App;
