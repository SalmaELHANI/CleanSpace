import React from 'react';
import check from "../images/check.jpg"
import cleanerHome from '../images/cleaner-home.jpg'
function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12" data-aos="fade-right">
                        <img
                            className='rounded-2xl shadow-lg shadow-gray-400'
                            src={cleanerHome}
                            alt="image"
                            loading="lazy"
                            width="" // Ajoutez votre valeur de largeur ici
                            height="" // Ajoutez votre valeur de hauteur ici
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            CleanSpace : Experts en Nettoyage et Hygiène
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Chez CleanSpace, nous sommes animés par la passion de maintenir des espaces propres et sains. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                            omnis voluptatem accusantium nemo perspiciatis delectus atque
                            autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                            consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure
                            expedita at? Asperiores nemo possimus nesciunt dicta veniam
                            aspernatur quam mollitia.
                        </p>
                        <ul className="mt-4 text-black">
                            <li>
                                <img
                                    src={check}
                                    alt="icon check"
                                    className="w-4 h-4 mr-2 inline"
                                />
                                Services de nettoyage professionnel
                            </li>
                            <li>
                                <img
                                    src={check}
                                    alt="icon check"
                                    className="w-4 h-4 mr-2 inline"
                                />
                                Interventions rapides et efficaces
                            </li>
                            <li>
                                <img
                                    src={check}
                                    alt="icon check"
                                    className="w-4 h-4 mr-2 inline"
                                />
                                Nettoyage régulier pour un environnement sain
                            </li>
                            <li>
                                <img
                                    src={check}
                                    alt="icon check"
                                    className="w-4 h-4 mr-2 inline"
                                />
                                Disponibles 7j/7 pour répondre à vos besoins
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
