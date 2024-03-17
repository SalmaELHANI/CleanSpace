import React, { useState, useEffect } from 'react';
import CleanSpace from "../images/cleanSpace.png";
import { Link } from 'react-router-dom';

function Hero() {
  const [currentStep, setCurrentStep] = useState(1);
  
  const steps = [
    {
      title: "CleanSpace prend soin de votre espace de vie.",
      content: "Nous sommes une entreprise spécialisée dans les services de nettoyage. Notre objectif est de fournir une expérience de nettoyage de haute qualité et sans tracas à nos clients, en veillant à ce que nos experts en nettoyage soient qualifiés et fiables."
    },
    {
      title: "Pourquoi Nous choisir ?",
      content: "Nous sommes déterminés à simplifier votre vie en vous offrant un nettoyage de qualité supérieure, assuré par des équipes fiables et professionnelles. Grâce à notre plateforme conviviale, la réservation de nos services est rapide et facile, vous permettant de profiter pleinement d'un environnement propre et bien entretenu."
    }
  ];

  const nextStep = () => {
    setCurrentStep(currentStep === steps.length ? 1 : currentStep + 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextStep();
    }, 10000);
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700,900&display=swap"
        rel="stylesheet"
      />
      <main className="bg-white font-open-sans lg:mt-16 mt-28">
        <div className="container mx-auto px-8 py-8 lg:py-14 relative flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start" data-aos="fade-down">
            <div>
              <h1 className="text-center lg:text-left text-3xl sm:text-5xl font-light text-blue-700 leading-tight mb-4">
                CleanSpace {' '}
                <strong className="font-black text-3xl  block text-yellow-400">
                  {steps[currentStep - 1].title}
                </strong>
              </h1>
              <p className="text-center lg:text-left sm:text-lg text-gray-500 lg:pr-40 leading-relaxed">
                {steps[currentStep - 1].content}
              </p>
            </div>
            <Link to="reserve" className="bg-blue-500 hover:bg-blue-400 mt-8 py-3 px-8 text-lg rounded-full font-bold uppercase text-white tracking-widest">
              Réserver
            </Link>
            <div className="mt-16 lg:mt-12 lg:ml-1 flex">
              {steps.map((step, index) => (
                <span
                  key={index}
                  className={`cursor-pointer w-12 h-1 mx-1 ${currentStep === index + 1 ? 'bg-blue-400' : 'bg-blue-200'}`}
                  onClick={() => setCurrentStep(index + 1)}
                ></span>
              ))}
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
