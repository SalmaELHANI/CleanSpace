import { React } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard.jsx';
import Reservation from './Reservation.jsx';
import Contacts from './Contacts.jsx';
import Admins from './Admins.jsx';
import Sidebar from './SideBar.jsx';
import AddAdmin from './AddAdmin.jsx';

function DashboardRoutes() {
    
    return (
        <div className="flex flex-row h-screen md:flex-row overflow-hidden ">
        <Sidebar />
        <div className="flex flex-col flex-grow w-full">
          <div className="bg-blue-100 min-h-screen overflow-auto">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/reservation' element={<Reservation />} />
              <Route path='/contacts' element={<Contacts />} />
              <Route path='/admin' element={<Admins />} />
              <Route path='/AjouterAdmin' element={<AddAdmin />} />
            </Routes>
          </div>
        </div>
      </div>
    );
}

export default DashboardRoutes;
