import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../store/contact/ContactThunks.js'; 

function Contacts() {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contact.contacts); 
    const loading = useSelector((state) => state.contact.loading);
  
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteContact(id))
        .then(() => {
            dispatch(fetchContacts());
          })
    };

    return (
        <main className="container mb-32 mt-6">
             <div className="p-4 flex">
                <h1 className="mt-14 font-bold text-4xl text-left pb-9 sm:p-2">Questions</h1>
            </div>
            <div className="p-9 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {loading ? (
                    <div className="flex items-center justify-center">
                        <div className="loader"></div>
                    </div>
                ) : (
                    contacts.slice().reverse().map((contact) => (
                        <div key={contact._id} className="md:w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 grid justify-items-stretch">
                            <div>
                                <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{contact.email}</h5>
                            </div>
                            <p className="my-3 font-normal text-gray-700 dark:text-gray-400">{contact.question}</p>

                            <div className="justify-self-start flex items-center space-x-3 ">
                                <a
                                    href={`mailto:${contact.email}?subject=Réponse à votre question&body=Bonjour,`}
                                    className="inline-flex items-center justify-center w-10 h-10 mr-2 transition-colors duration-150 bg-blue-500 rounded-full focus:shadow-outline"
                                >
                                    <svg
                                        className="w-6 h-6 rotate-90"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                                    </svg>
                                </a>

                                <button onClick={() => handleDelete(contact._id)} className="inline-flex items-center justify-center w-10 h-10 ml-3 transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline">
                                    <svg
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        className="h-5 w-5"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                            strokeWidth="2"
                                            strokeLinejoin="round"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </main>
    );
}

export default Contacts;
