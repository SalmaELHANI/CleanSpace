import React from 'react';
import CleanSpace from "../images/cleanSpace.png";

function Hero() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,900&display=swap"
        rel="stylesheet"
      />

      <main className="bg-white font-open-sans">
        <div  className="container mx-auto px-8 py-8 lg:py-14 relative flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start" data-aos="fade-down">
            <h1 className="text-center lg:text-left text-3xl sm:text-5xl font-light text-blue-700 leading-tight mb-4">
              CleanSpace {' '}
              <strong className="font-black text-3xl sm:text-4xl block text-yellow-400">
                prend soin de votre espace de vie.
              </strong>
            </h1>
            <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">
              Confiez l'entretien de votre domicile à nos équipes de nettoyage professionnelles.
              Découvrez la distinction de CleanSpace pour un environnement propre et sain. Chez nous, le nettoyage n'est pas simplement un service, c'est une expérience.
            </p>
            <a
              href="/#contact"
              className="bg-blue-500 hover:bg-blue-400 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest"
            >
              Contactez-nous
            </a>
            <div className="mt-16 lg:mt-12 lg:ml-8 flex">
              <span className="w-12 h-1 mx-1 bg-blue-400"></span>
              <span className="w-12 h-1 mx-1 bg-blue-200"></span>
              <span className="w-12 h-1 mx-1 bg-blue-200"></span>
            </div>
          </div>
          <div className="sm:w-2/3 lg:absolute top-0 right-0 lg:ml-20 lg:h-[650px] lg:w-[700px]">
            <img src={CleanSpace} alt="CleanSpaceHero" />
          </div>
        </div>
      </main>
    </>
  );
}

export default Hero;
