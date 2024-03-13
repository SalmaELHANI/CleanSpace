import React , { useState }  from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <header className="h-24 sm:h-20 flex items-center bg-white drop-shadow-lg ">
            <div className="container mx-auto pl-8 flex items-center justify-between">
                <Link to="/" className="uppercase text-blue-700 flex flex-col items-center">
                    <div className="text-2xl">
                        Clean<strong className="font-bold text-yellow-400">Space</strong>
                    </div>
                    <small className="tracking-widest">Your tagline goes here</small>
                </Link>
                <div className="flex items-center">
                    <nav className="text-gray-900 tracking-widest text-sm font-bold lg:flex items-center hidden uppercase">
                        <Link to="/home" className="py-2 px-6 mr-4 hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300">
                            Home
                        </Link>
                        <Link to="/about" className="py-2 px-6 mr-4  hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300">
                            About
                        </Link>
                        <Link to="/service" className="py-2 px-6 mr-4  hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300">
                            Services
                        </Link>
                        <a href="/#contact" className="py-2 px-6 mr-4  hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300">
                            Contact
                        </a>
                        <Link to="reserve" className="py-2 px-6 mr-8 rounded-2xl  bg-yellow-400 hover:bg-yellow-300 duration-300">
                            Réserver
                        </Link>
                    </nav>
                    <button className="ml-4 w-6 h-6 flex flex-col lg:hidden mr-8">
                        <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                        <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                        <span className="w-6 h-px bg-gray-900 mb-1 rounded"></span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Navbar