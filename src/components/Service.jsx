import React from 'react';
import img1 from "../images/Services_image/1.png";
import img2 from "../images/Services_image/2.png";
import img3 from "../images/Services_image/3.png";
import img4 from "../images/Services_image/4.png";
import img5 from "../images/Services_image/5.png";
import img6 from "../images/Services_image/6.png";

function Service() {
  return (
    <div className="py-16 bg-blue-200 lg:mt-16 mt-28">
      <div className="container m-auto text-gray-500 md:px-12 xl:px-0">
        <div className=" flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-blue-700">
                Nos Solutions pour un Environnement Propre
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-black sm:text-4xl md:text-[40px]">
                Services de Nettoyage Professionnels
              </h2>
              <p className="text-base text-body-color ">
                Explorez nos services de nettoyage innovants conçus pour maintenir votre espace propre et sain.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid gap-6 md:w-3/4 lg:w-full lg:grid-cols-3 sm:w-3/4">
          {serviceItems.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl px-8 pt-12 mx-4 sm:px-12 lg:px-8" data-aos="zoom-in">
              <div className="mb-12 space-y-3">
                <h3 className="text-2xl font-semibold text-yellow-400">{service.title}</h3>
                <p className="mb-6">{service.description}</p>
              </div>
              <img
                src={service.imageSrc}
                alt={`illustration-${index}`}
                className="w-2/3 ml-auto"
                width="1000"
                height="700"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const serviceItems = [
  {
    title: 'Ménage Simple',
    description: 'Le ménage simple permet de bénéficier selon vos besoins d\'un ménage de quelques heures de votre habitation (serpillère, dépoussiérage, changement des draps, vaisselle du jour, salle de bain',
    imageSrc: img1,
    
  },
  {
    title: 'Grand Ménage',
    description: 'Le grand ménage inclut le déplacement de vos meubles pour un nettoyage en profondeur de votre habitation (hors cuisine)',
    imageSrc: img2,
  },
  {
    title: 'Grand Ménage Cuisine',
    description: 'Votre cuisine est vidée nettoyée de fond en comble, les placards sont vidés lavés, toute la vaisselle est lavée essuyée et remise en place.',
    imageSrc: img3,
  },
  {
    title: 'Nettoyage des bureaux',
    description: 'Nettoyage professionnel des bureaux pour un environnement de travail propre et sain.',
    imageSrc:img5,
  },
  {
    title: 'Nettoyage de fin de chantier',
    description: 'Nettoyage en profondeur à la fin des travaux pour un espace impeccable.',
    imageSrc: img6,
  },
  {
    title: 'Nettoyage des restaurants',
    description: 'Services de nettoyage spécialement conçus pour les restaurants afin de maintenir un environnement propre et hygiénique.',
    imageSrc: img4,
  },
];

export default Service;
