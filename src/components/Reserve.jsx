import React from 'react'

function Reserve() {
    return (
        <div class="flex items-center justify-center p-12 ">
            <div class="mx-auto w-full max-w-[550px] border border-gray-500 m-4 p-7 rounded-lg shadow-lg shadow-gray-400">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="fName"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Prénom:
                                </label>
                                <input
                                    type="text"
                                    name="fName"
                                    id="fName"
                                    placeholder="Votre prénom:"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="lName"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Nom de famille:
                                </label>
                                <input
                                    type="text"
                                    name="lName"
                                    id="lName"
                                    placeholder="Votre nom:"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            name="guest"
                            id="guest"
                            placeholder="@gmail.com"
                            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Téléphone:
                        </label>
                        <input
                            type="text"
                            name="guest"
                            id="guest"
                            placeholder="06 23 55 85 53"
                            class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                    </div>
                    <div class="mb-5">
                        <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Ville:
                        </label>
                        <select
                            className="block w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            id="city"
                        >
                            <option>Agadir</option>
                            <option>Casablanca</option>
                            <option>Marrakech</option>
                            <option>Safi</option>
                            <option>El Jadida</option>
                        </select>
                    </div>
                    <div class="mb-5">
                        <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Service:
                        </label>
                        <select
                            className="block w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            id="city"
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
                    <div class="mb-5">
                        <label
                            for="guest"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Type d'habitation:
                        </label>
                        <select
                            className="block w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            id="city"
                        >
                            <option>Villa</option>
                            <option>Appartement</option>
                            <option>Maison </option>
                            <option>riad</option>
                            <option>Local commercial</option>
                        </select>
                    </div>
                    <div class="-mx-3 flex flex-wrap">
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="date"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Date
                                </label>
                                <input
                                    type="date"
                                    name="date"
                                    id="date"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                        <div class="w-full px-3 sm:w-1/2">
                            <div class="mb-5">
                                <label
                                    for="time"
                                    class="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Time
                                </label>
                                <input
                                    type="time"
                                    name="time"
                                    id="time"
                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="mb-5">
                        <label
                            for="message"
                            class="mb-3 block text-base font-medium text-[#07074D]"
                        >
                            Message:
                        </label>
                        <textarea
                            rows="4"
                            name="message"
                            id="message"
                            placeholder="Tapez votre message"
                            class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        ></textarea>
                    </div>
                    <div>
                        <button
                            className="bg-blue-500 hover:bg-blue-400 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest"
                        >
                            Terminer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Reserve