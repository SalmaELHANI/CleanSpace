import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAdmin } from '../store/admin/adminSlice.js';


const handleRequestError = (error, setError) => {
    if (error.response.status === 400) {
        setError("Tous les champs sont requis");
    } else if (error.response.status === 401) {
        setError("Nom d'utilisateur ou mot de passe incorrect");
    } else {
        setError("Une erreur s'est produite lors de la connexion");
    }
};

export default function LoginAdmin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [values, setValues] = useState({
        email: "",
        password: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(values);
            const response = await axios.post(`http://localhost:3000/admin/login`, values);
            localStorage.setItem("access_token", response.data.token); 
            const id = response.data.id
            const userResponse = await axios.get(`http://localhost:3000/admin/${id}`);
            const { username, email, role } = userResponse.data; 
            dispatch(setAdmin({ id, username, email, role }));
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            handleRequestError(error, setError);
        }
    };
    return (
        <div className="mt-24">
            <form>
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <p className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                                Login
                            </p>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    email
                                </label>
                                <input
                                    placeholder="cleanspace137@gmail.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    id="email2"
                                    type="text"
                                    value={values.email}
                                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900"
                                >
                                    Password
                                </label>
                                <input
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
                                    placeholder="••••••••"
                                    id="password"
                                    type="password"
                                    value={values.password}
                                    onChange={(e) => setValues({ ...values, password: e.target.value })}
                                />
                            </div>
                            <div className="mt-2">
                                {error && <p className="text-red-500">{error}</p>}
                            </div>
                            <button
                                className="w-full bg-blue-500 hover:bg-blue-300 hover:text-black focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center focus:ring-blue-800 text-white"
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
