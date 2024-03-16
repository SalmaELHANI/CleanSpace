import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const links = [
        {
            id: 1, label: "Accueil", target: "/",
        },
        {
            id: 2, label: "À propos", target: "/about",
        },
        {
            id: 3, label: "Services", target: "/service",
        },
    ];
    const handleHomeClick = () => {
        setMenuOpen(false); 
    };
    return (
        <header className="h-24 sm:h-20 flex items-center bg-white drop-shadow-lg relative z-10 ">
            <div className="container mx-auto pl-8 flex items-center justify-between relative z-10">
                <Link to="/" className="uppercase text-blue-700 flex flex-col items-center">
                    <div className="text-2xl">
                        Clean<strong className="font-bold text-yellow-400">Space</strong>
                    </div>
                    <small className="tracking-widest">à votre service</small>
                </Link>
                <div className="flex items-center">
                    <nav className="text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase">
                        {links.map(({ id, label, target }) => (
                            <Link
                                key={id}
                                to={target}
                                className={`py-2 px-6 mr-4  hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300`}
                            >
                                {label}
                            </Link>
                        ))}
                        <a href="/contact" className="py-2 px-6 mr-4  hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300">
                            Contact
                        </a>
                        <Link to="reserve" className="py-2 px-6 mr-8 rounded-2xl  bg-yellow-400 hover:bg-yellow-300 duration-300">
                            Réserver
                        </Link>
                    </nav>
                    <button
                        data-collapse-toggle="navbar-default"
                        type="button"
                        className="ml-4 w-10 h-10 flex flex-col  mr-8 items-center p-2 justify-center text-sm text-gray-500 rounded-lg lg:hidden bg-gray-100 focus:outline-none ring-2 ring-gray-200 hover:bg-gray-200"
                        aria-controls="navbar-default"
                        aria-expanded="false"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full md:hidden bg-white" id="navbar-default">
                        <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50">
                            {links.map(({ label, target }, index) => (
                                <li key={index}>
                                    {target === "/" ?
                                        <Link to={target} onClick={handleHomeClick} className="block py-2 px-3  rounded text-white bg-blue-700">{label}</Link>
                                        :
                                        <Link to={target} onClick={handleHomeClick} className="block py-2 px-3  rounded  hover:bg-blue-200" >{label}</Link>
                                    }
                                </li>
                            ))}
                            <a href="/contact" onClick={handleHomeClick} className="block py-2 px-3  rounded hover:text-white hover:bg-blue-700">
                                Contact
                            </a>
                            <li>
                                <Link to="/Reserve" onClick={handleHomeClick}  className="font-bold block py-2 px-3 text-yellow-400 rounded hover:text-yellow-300">Réserver</Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    )
}
export default Navbar;