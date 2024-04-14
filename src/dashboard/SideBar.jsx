import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MoreVertical } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/admin/adminSlice';

export default function Sidebar() {
    const [expanded, setExpanded] = useState(false);
    const classNamelogo = expanded ? "h-16 w-auto" : "transition-all w-16";
    const name = useSelector((state) => state.admin.username);
    const email = useSelector((state) => state.admin.email);
    const role = useSelector((state) => state.admin.role);
    const dispatch = useDispatch();
    
    const handleLogout = () => { 
        localStorage.removeItem("access_token");
        dispatch(logout());
    }; 

    const QuestionIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 ">
            <path fillRule="evenodd" d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z" clipRule="evenodd" />
        </svg>
    );
    const LogOutIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5 ">
            <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd"></path>
        </svg>
    );
    const RendezVousIcon = () => (
        <svg className="h-5 w-5 " fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
    );
    const AdminIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
            <path fillRule="evenodd" d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z" clipRule="evenodd"></path>
        </svg>
    );

    return (
        <div className={`relative mb-2 p-4 pt-14 min-h-screen flex flex-col justify-between transition-all ease-in-out duration-300 backdrop-blur-lg ${expanded ? 'w-72' : 'w-20'}`}>
            {/* Toggle Button */}
            <div
                onClick={() => setExpanded(!expanded)}
                className={`absolute top-0 m-1 w-7 h-8 cursor-pointer flex flex-col items-center justify-center space-y-1.5${expanded ? " mr-5 right-0 " : " pl-1 "}`}
            >

                <div className={`w-full h-[4px] bg-yellow-400 rounded-lg transition-all duration-300 ${expanded ? "rotate-45 translate-y-7" : ""}`}></div>
                <div className={`w-full h-[4px] bg-yellow-400 rounded-lg transition-all duration-300 ${expanded ? "opacity-0 " : "opacity-100"}`}></div>
                <div className={`w-full h-[4px] bg-yellow-400 rounded-lg transition-all duration-300 ${expanded ? "-rotate-45 -translate-y-2.5" : ""}`}></div>
            </div>


            <div className='mt-9'>
                <Link to={"/dashboard"} className="flex items-center transition-all duration-300 ease-in-out mb-11 ">
                    <img
                        src="/logo.png"
                        className={classNamelogo}
                        alt=""
                    />
                </Link>
                <div className="mt-4">
                    <SidebarItem svg={<RendezVousIcon />} text="Gestion des rendez-vous" link="/dashboard/reservation" className="flex items-center w-full p-3 pt-3 mb-4 pl-3 rounded-lg text-start leading-tight transition-all hover:text-white hover:bg-blue-500 hover:rounded-2xl duration-300 focus:bg-blue-500 focus:bg-opacity-80 active:bg-blue-500 focus:text-white active:text-white outline-none" expanded={expanded} />
                    <SidebarItem svg={<QuestionIcon />} text="Questions user" link="/dashboard/contacts" className="flex items-center w-full p-3 pt-3 mb-4 pl-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300 focus:bg-blue-500 focus:bg-opacity-80 active:bg-blue-500 focus:text-white active:text-white outline-none" expanded={expanded} />
                    {role === 'superadmin' && <SidebarItem svg={<AdminIcon />} text="Gestion des admins" link="/dashboard/admin" className="flex items-center w-full p-3 pt-3 mb-4 pl-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-500 hover:text-white hover:rounded-2xl duration-300 focus:bg-blue-500 focus:bg-opacity-80 active:bg-blue-500 focus:text-white active:text-white outline-none" expanded={expanded} />}
                    <SidebarItem svg={<LogOutIcon />} text="Log Out" link="/" onClick={handleLogout} className="flex items-center w-full p-3 pt-3 mb-4 pl-3 rounded-lg text-start leading-tight transition-all text-red-600 hover:bg-red-600 hover:bg-opacity-80 focus:bg-red-600 focus:bg-opacity-80 active:bg-red-600 active:bg-opacity-80 hover:text-white focus:text-black active:text-black outline-none" expanded={expanded}/>
                </div>

            </div>

            {/* User part at the bottom */}
            {expanded ? (
                <div className="border-t flex p-3">
                    <div className="flex justify-between items-center overflow-hidden transition-all duration-300 ease-in-out w-52 ml-3">
                        <Link to={"/dashboard/profile"} className="leading-4">
                            <h4 className="font-semibold">{name}</h4>
                            <span className="text-xs text-gray-400">{email}</span>
                        </Link>
                        <button onClick={() => setExpanded(!expanded)}>
                            <MoreVertical size={20} />
                        </button>
                    </div>
                </div>
            ) : (
                <button>
                    <MoreVertical size={30} className="ml-2 hover:bg-blue-200 p-1 rounded-xl" onClick={() => setExpanded(!expanded)}/>
                </button>
            )}
        </div>
    );
}

function SidebarItem({ svg, text, link, className, onClick, expanded }) {
    return (
        <>
            <Link to={link} className={className} onClick={onClick}>
                <div className={`shrink-0 ${expanded ? 'mr-4' : 'mr-0'}`}>
                    {svg}
                </div>
                <span className={`${expanded ? 'block' : 'hidden'} whitespace-nowrap`}>
                    {text}
                </span>
            </Link>
        </>
    );
}
