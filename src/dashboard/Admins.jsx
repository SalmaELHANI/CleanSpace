import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import { useSelector } from 'react-redux';

const Admin = () => {
  const [admins, setAdmins] = useState([]);
  const apiUrl = 'http://localhost:3000';
  const token= localStorage.getItem('access_token');
  const loggedInUsername = useSelector((state) => state.admin.id);
  console.log(loggedInUsername);

  useEffect(() => {
    fetchAdmins(); 
  }, []);

  const fetchAdmins = async () => {
    try {
      const response = await axios.get(`${apiUrl}/admin`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAdmins(response.data);
    } catch (error) {
      console.error('Error fetching admins:', error);
    }
  };



  const handleDeleteAdmin = async (id) => {
    try {
      await axios.delete(`${apiUrl}/admin/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchAdmins(); 
    } catch (error) {
      console.error('Error deleting admin:', error);
    }
  };

  return (
    <>
      <div className="flex my-10">
        <h3 className="font-bold text-4xl text-left pl-6">Ajouter Admin </h3>
        <Link to={"/dashboard/AjouterAdmin"} className="text-4xl " >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Role</th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {admins.slice().reverse().map((admin) => (
                <tr key={admin._id} className={admin.name === loggedInUsername ? "bg-blue-200" : ""}>
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="relative h-10 w-10">
                    <img className="h-full w-full rounded-full object-cover object-center" src={`https://ui-avatars.com/api/?name=${admin.username}&background=random`} alt={admin.username} />
                    <span className="absolute right-0 bottom-0 h-2 w-2 rounded-full bg-green-400 ring ring-white"></span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">{admin.name}</div>
                    <div className="text-gray-400">{admin.email}</div>
                  </div>
                </th>
                <td className="px-6 py-4">{admin.role}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-4">
                    <button type="button" onClick={() => handleDeleteAdmin(admin._id)} className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Admin;
