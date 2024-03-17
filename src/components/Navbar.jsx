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
    const MenuIconOpen = () => (
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      );
      const MenuIconClose = () => (
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xmlSpace="preserve">
            <g style={{ stroke: "none", strokeWidth: "0", strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "none", fillRule: "nonzero", opacity: "1" }} transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                <path d="M6 90c-1.536 0-3.071-0.586-4.243-1.758c-2.343-2.343-2.343-6.142 0-8.484l78-78c2.342-2.343 6.143-2.343 8.484 0c2.344 2.343 2.344 6.142 0 8.485l-78 78C9.071 89.414 7.536 90 6 90z" style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: "1" }} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
                <path d="M84 90c-1.535 0-3.071-0.586-4.242-1.758l-78-78c-2.343-2.343-2.343-6.142 0-8.485c2.343-2.343 6.143-2.343 8.485 0l78 78c2.344 2.343 2.344 6.142 0 8.484C87.071 89.414 85.535 90 84 90z" style={{ stroke: "none", strokeWidth: "1", strokeDasharray: "none", strokeLinecap: "butt", strokeLinejoin: "miter", strokeMiterlimit: "10", fill: "rgb(0,0,0)", fillRule: "nonzero", opacity: "1" }} transform=" matrix(1 0 0 1 0 0)" strokeLinecap="round" />
            </g>
        </svg>
    );
    
    return (
        <header className="h-24 sm:h-20 flex items-center bg-white drop-shadow-lg fixed top-0 left-0 w-full z-50 ">
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
                        {menuOpen ? <MenuIconClose /> : <MenuIconOpen />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="absolute top-full left-0 w-full lg:hidden bg-white" id="navbar-default">
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