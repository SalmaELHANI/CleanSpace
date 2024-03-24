import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import { useDispatch } from 'react-redux';
import { createContact } from '../store/contact/ContactThunks.js';

function FooterLink({ to, children }) {
    return (
        <Link
            to={to}
            className="text-gray-600 transition-colors duration-300  hover:underline hover:text-blue-700 hover:font-black"
        >
            {children}
        </Link>
    );
}
const socialLinks = [
    {
        label: "Whatsapp", className: "mx-2", svgWidth: 35, svgHeight: 35, url: "https://wa.me/0659063386",
        svgLink:
            <g>
                <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
            </g>
    },
    {
        label: "Instagram", className: "mx-2", svgWidth: 35, svgHeight: 35, url: "https://www.instagram.com/cleanspace.ma?igsh=aDN5aWxpd3BoN2sy&utm_source=qr",
        svgLink:
            <g>
                <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fd5"></stop><stop offset=".328" stopColor="#ff543f"></stop><stop offset=".348" stopColor="#fc5245"></stop><stop offset=".504" stopColor="#e64771"></stop><stop offset=".643" stopColor="#d53e91"></stop><stop offset=".761" stopColor="#cc39a4"></stop><stop offset=".841" stopColor="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#4168c9"></stop><stop offset=".999" stopColor="#4168c9" stopOpacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
            </g>
    },
    {
        label: "Facebook", className: "mx-2", svgWidth: 33, svgHeight: 33, url: "https://www.facebook.com/profile.php?id=61557423365831&mibextid=LQQJ4d",
        svgLink:
            <g>
                <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2aa4f4"></stop><stop offset="1" stopColor="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
            </g>
    }
];
const otherLinks = [
    { text: "FAQ", url: "#" },
    { text: "Recrutement", url: "#" },
    { text: "Politique de confidentialité", url: "#" },
    { text: "Avis", url: "#" }
];
function Footer() {
    const [contact, setContact] = useState({
        email: "",
        question: ""
    });
    const [errEmail, setErrEmail] = useState("");
    const [notification, setNotification] = useState("");

    const dispatch = useDispatch();

    const isEmailValid = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };


    const handleSubmit = async (e) => {
        if (!isEmailValid(contact.email)) {
            setErrEmail("Veuillez saisir une adresse e-mail valide.");
            return
        }
        setErrEmail("")
        e.preventDefault();
        await dispatch(createContact(contact));
        setContact({
            email: "",
            question: ""
        });
        setNotification("Réponse envoyée par e-mail bientôt. Merci!");
        setTimeout(() => {
            setNotification("");
        }, 5000);
    };

    return (
        <footer className="bg-white " id="contact">
            <div className="container px-6 py-12 mx-auto">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-y-10 lg:grid-cols-5">
                    <div className="sm:col-span-3 lg:col-span-2">
                        <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl ">
                            Posez-nous votre question
                        </h1>
                        <div className="">
                            <div className='flex flex-col mx-auto space-y-3 md:space-y-0 md:flex-row'>
                                <input
                                    id="email"
                                    type="text"
                                    className="px-4 py-2 mt-5 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Adresse Email"
                                    value={contact.email}
                                    onChange={(e) => setContact({ ...contact, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-2">
                                <p className="text-red-500">{errEmail}</p>
                            </div>
                            <div className='flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row'>
                                <input
                                    id="question"
                                    type="text"
                                    className="whitespace-pre-wrap px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                                    placeholder="Votre question"
                                    value={contact.question}
                                    onChange={(e) => setContact({ ...contact, question: e.target.value })}
                                />
                                <div className='text-nowrap'>
                                    <button
                                        onClick={(e) => {
                                            handleSubmit(e);
                                        }}
                                        className="text-nowrap w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-yellow-400 rounded-lg hover:bg-yellow-300 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                                        Envoyer
                                        <svg className="w-6 h-6 rotate-90 inline-block ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                        {notification && (
                            <div className="mt-4 text-2xl text-green-600">{notification}</div>
                        )}
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Liens Rapides</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <FooterLink to="/">Accueil</FooterLink>
                            <FooterLink to="/about">À propos</FooterLink>
                            <FooterLink to="/service">Services</FooterLink>
                            <FooterLink to="/reserve">Réserver</FooterLink>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Informations</p>

                        <div className="flex flex-col items-start mt-5 space-y-2">
                            {otherLinks.map((link, index) => (
                                <a key={index} href={link.url} className="text-gray-600 transition-colors duration-300 hover:underline hover:text-blue-700 hover:font-black">{link.text}</a>
                            ))}
                        </div>

                    </div>
                    <div>
                        <p className="font-semibold text-gray-800">Contact</p>
                        <div className="flex flex-col items-start mt-5 space-y-2">
                            <p className="text-gray-600 transition-colors duration-300">
                                Casablanca, Marrakech, Agadir, El jadida, Safi
                            </p>
                            <a href="tel:0659063386" className="text-gray-600 transition-colors duration-300  hover:text-blue-700 hover:font-black" aria-label="WhatsApp">(+212)6 59 06 33 86</a>
                            <a href="mailto:ceanspace137@gmail.com" className="text-gray-600 transition-colors duration-300 hover:text-blue-700 hover:font-black" aria-label="Email">CleanSpace137@gmail.com</a>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 md:my-8" />
                <div className="flex items-center justify-between">
                    <img src={logo} alt="Logo" className="h-16 w-auto" />
                    <div className="flex -mx-2 mr-32">
                        {socialLinks.map((link, index) => (
                            <a key={index} href={link.url} className={link.className} aria-label={link.label}>
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={link.svgWidth} height={link.svgHeight} viewBox="0 0 48 48">
                                    {link.svgLink}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
