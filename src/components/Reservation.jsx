import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReservation } from '../store/reservation/ReservationThunks.js';

function Reservation() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        city: "Agadir",
        service: "Ménage Simple",
        residenceType: "Villa",
        date: "",
        time: "",
        message: ""
    });

    const dispatch = useDispatch();

    const nextStep = () => {
        console.log(formData);
        if (currentStep === 1) {
            if (formData.name === "" || formData.email === "" || formData.phone === "" || formData.city === "") {
                alert("Veuillez remplir tous les champs obligatoires.");
                return;
            }
        } else if (currentStep === 2) {
            if (formData.service === "" || formData.residenceType === "" || formData.date === "" || formData.time === "") {
                alert("Veuillez remplir tous les champs obligatoires.");
                return;
            }
        }
        setCurrentStep(currentStep + 1);
    };

    const getCurrentDate = () => {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleStepChange = (step) => {
        if (currentStep !== 3) {
            setCurrentStep(step);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("formData create :", formData);
        try {
            if (!formData.message) {
                delete formData.message;
            }
            await dispatch(addReservation(formData));
        } catch (error) {
            console.error("Erreur lors de la soumission du formulaire :", error);
        }
    };

    return (
        <>
            <section>
                <div className="container p-4 mx-auto bg-white max-w-7xl sm:p-6 lg:p-8 lg:mt-16 mt-28">
                    <div className="flex flex-wrap -mx-8">
                        <div className="w-full px-8 lg:w-1/3" data-aos="fade-right">
                            <ul className="space-y-10 pt-20 lg:pt-24">
                                <h4 className="text-3xl font-extrabold leading-8 tracking-tight text-gray-900  sm:leading-9">
                                    Étapes de réservation:
                                </h4>
                                <li className={`flex -mx-4 ${currentStep === 1 ? 'bg-blue-50 p-2 rounded-xl' : ''}`}>
                                    <div className="px-2">
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                            1
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="cursor-pointer my-2 text-xl font-semibold" onClick={() => handleStepChange(1)}>
                                            Coordonnées
                                        </h3>
                                        <p className="text-gray-500 ">
                                            Entrez vos coordonnées personnelles.
                                        </p>
                                    </div>
                                </li>
                                <li className={`flex -mx-4 ${currentStep === 2 ? 'bg-blue-50 p-2 rounded-xl' : ''}`}>
                                    <div className="px-2">
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                            2
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="cursor-pointer my-2 text-xl font-semibold " onClick={() => handleStepChange(2)}>
                                            Services
                                        </h3>
                                        <p className="text-gray-500 ">
                                            Choisissez les services que vous souhaitez réserver.
                                        </p>
                                    </div>
                                </li>
                                <li className={`flex -mx-4 ${currentStep === 3 ? 'bg-blue-50 p-2 rounded-xl' : ''}`}>
                                    <div className="px-2">
                                        <span className="flex items-center justify-center w-16 h-16 mx-auto text-2xl font-bold text-blue-600 rounded-full font-heading bg-blue-50">
                                            3
                                        </span>
                                    </div>
                                    <div className="px-4">
                                        <h3 className="cursor-pointer my-2 text-xl font-semibold ">
                                            Terminer
                                        </h3>
                                        <p className="text-gray-500 ">
                                            Finalisez votre réservation.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="w-full px-8 lg:w-2/3">

                            <div className="flex items-center justify-center py-8 px-4 lg:p-12">
                                <div className="mx-auto w-full max-w-[550px] border border-gray-500 m-4 p-7 rounded-lg shadow-lg shadow-gray-400">
                                    {currentStep === 1 && (
                                        <form>
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="fName"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Nom et Prénom:<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="Name"
                                                    id="Name"
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="Votre nom et prénom:"
                                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="email"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Email:<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="@gmail.com"
                                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="phone"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Téléphone:<span className="text-red-500">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    name="phone"
                                                    id="phone"
                                                    value={formData.phone}
                                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    placeholder="06 23 55 85 53"
                                                    className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                                />
                                            </div>
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="city"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Ville:<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    className="block w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                    id="city"
                                                    name="city"
                                                    value={formData.city}
                                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}

                                                >
                                                    <option>Agadir</option>
                                                    <option>Casablanca</option>
                                                    <option>Marrakech</option>
                                                    <option>Safi</option>
                                                    <option>El Jadida</option>
                                                </select>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={nextStep}
                                                className="bg-blue-500 hover:bg-blue-400 mt-2 py-3 px-8 text-sm rounded-full font-bold uppercase text-white tracking-widest"
                                            >
                                                Suivant
                                            </button>
                                        </form>
                                    )}
                                    {currentStep === 2 && (
                                        <form>
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="guest"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Service:<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    className="block w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                    id="service"
                                                    value={formData.service}
                                                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}

                                                >
                                                    <option>Ménage Simple</option>
                                                    <option>Ménage quotudien</option>
                                                    <option>Ménage hebdomadaire </option>
                                                    <option>Ménage mensuel</option>
                                                    <option>Grand ménage cuisine </option>
                                                    <option>Nettoyage de fin chantier </option>
                                                    <option>Nettoyage des bureaux</option>
                                                    <option>Nettoyage des restaurants</option>
                                                </select>
                                            </div>
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="guest"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Type d'habitation:<span className="text-red-500">*</span>
                                                </label>
                                                <select
                                                    className="block w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                    id="residenceType"
                                                    value={formData.residenceType}
                                                    onChange={(e) => setFormData({ ...formData, residenceType: e.target.value })}

                                                >
                                                    <option>Villa</option>
                                                    <option>Appartement</option>
                                                    <option>Maison </option>
                                                    <option>riad</option>
                                                    <option>Local commercial</option>
                                                </select>
                                            </div>
                                            <div className="-mx-3 flex flex-wrap">
                                                <div className="w-full px-3 sm:w-1/2">
                                                    <div className="mb-5">
                                                        <label
                                                            htmlFor="date"
                                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                                        >
                                                            Date:<span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="date"
                                                            name="date"
                                                            id="date"
                                                            min={getCurrentDate()}
                                                            value={formData.date}
                                                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                                        />
                                                    </div>
                                                </div>
                                                <div className="w-full px-3 sm:w-1/2">
                                                    <div className="mb-5">
                                                        <label
                                                            htmlFor="time"
                                                            className="mb-3 block text-base font-medium text-[#07074D]"
                                                        >
                                                            Temp:<span className="text-red-500">*</span>
                                                        </label>
                                                        <input
                                                            type="time"
                                                            name="time"
                                                            id="time"
                                                            value={formData.time}
                                                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                            min="08:00"
                                                            max="23:00"
                                                            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"

                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-5">
                                                <label
                                                    htmlFor="message"
                                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                                >
                                                    Message:
                                                </label>
                                                <textarea
                                                    rows="4"
                                                    name="message"
                                                    id="message"
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                    placeholder="Tapez votre message"
                                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                ></textarea>
                                            </div>
                                            <div>
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-400 mt-2 py-3 px-8 text-sm rounded-full font-bold uppercase text-white tracking-widest"
                                                    onClick={(e) => {
                                                        handleSubmit(e);
                                                        nextStep();
                                                    }}
                                                >
                                                    Terminer
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                    {currentStep === 3 && (
                                        <div className='flex items-center justify-center min-h-screen  '>
                                            <div className='w-full max-w-lg px-10 py-8 mx-auto bg-gray-100 rounded-lg shadow-xl'>
                                                <div className="text-2xl text-blue-500 mb-8">
                                                    Clean<strong className="font-bold text-yellow-400">Space</strong>
                                                </div>
                                                <p className='font-medium text-2xl text-center mb-10'>Félicitations: <span className=' text-blue-500'> {formData.name} </span></p>
                                                <p className='font-medium text-black mb-6'>
                                                    Nous avons bien reçu votre demande de réservation. Le PDF avec les détails a été envoyé à votre adresse e-mail.
                                                </p>
                                                <div className='max-w-md mx-auto space-y-6'>
                                                    <div className='text-base leading-7'>
                                                        <p className='font-medium text-black'>Phone Number:</p>
                                                        <p className='text-gray-600'>
                                                            {formData.phone}
                                                        </p>
                                                    </div>

                                                    <div className='text-base leading-7 mt-6'>
                                                        <p className='font-medium text-black'>Date et Local Time:</p>
                                                        <p className='text-gray-600'>
                                                            {formData.date} {formData.time}
                                                        </p>
                                                    </div>
                                                    <div className='text-base leading-7'>
                                                        <p className='font-medium text-black'>Emplacement:</p>
                                                        <p className='text-gray-600'>
                                                            {formData.city}
                                                        </p>
                                                    </div>
                                                    <div className='text-base leading-7'>
                                                        <p className='font-medium text-black'>Service:</p>
                                                        <p className='text-gray-600'>
                                                            {formData.service}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Reservation;