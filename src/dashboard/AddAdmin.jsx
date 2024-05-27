import React, { useState } from 'react';
import axios from 'axios'; 
import { Link, useNavigate } from 'react-router-dom';
const token= localStorage.getItem('access_token');

const AddAdmin = () => {
  const [newAdmin, setNewAdmin] = useState({ username: '', email: '', password:'', role: ''});
  const apiUrl = 'https://cleanspace.onrender.com';
  const navigate = useNavigate();


  const handleAddAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${apiUrl}/admin/createadmin`, newAdmin, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setNewAdmin({ username: '', email: '',password:'', role: '' });
      navigate('/dashboard/admin');
    } catch (error) {
      console.error('Error adding admin:', error);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="container p-6 bg-white shadow-xl rounded-xl w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-blue-500">Create Admin</h1>

        <form onSubmit={handleAddAdmin} className="max-w-md mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-600 ">
              Nom :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={newAdmin.username}
              onChange={(e) => setNewAdmin({ ...newAdmin, username: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              Email :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={newAdmin.email}
              onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">
              password :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={newAdmin.password}
              onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium text-gray-600">
              Rôle :
            </label>
            <select
              id="role"
              name="role"
              value={newAdmin.role}
              onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
              className="mt-1 p-2 border rounded-md w-full "
            >
              <option value="">Sélectionner un rôle</option>
              <option value="admin">Admin</option>
              <option value="superadmin">Super Admin</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Ajouter
          </button>
        </form>
        
        <Link to="/dashboard/admin" className="block text-center mt-4 text-blue-500 hover:underline">
          Retour
        </Link>
      </div>
    </div>
  );
};

export default AddAdmin;
