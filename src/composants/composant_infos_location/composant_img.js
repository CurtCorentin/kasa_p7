import React from 'react';

import IdLocation from './fonctions_infos_location/recuperationId';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";
import { useState } from 'react';

const Composant_img = () => {

const loc = IdLocation([0]);////infos location
const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
const length = loc.pictures.length; // longueur du tableau de slides

const nextSlide = () => {
   setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
};
const prevSlide = () => {
   setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
};

return (
   <section id="carrousel-container">
      {length > 1 && (
    <div className='carrousselDown'>{<IoIosArrowBack onClick={prevSlide}/>}</div>
      )}
      {length > 1 && (
       <div className='carrousselUp'>{<IoIosArrowForward onClick={nextSlide}/>}</div>
      )}
      {loc.pictures.map((slide, index) => (
         <div
            key={index} // mise en place du slider avec affichage conditionnel et opacity=1 quand le slide en cours vaut l'index
            className={
               current === index
                  ? "slider bl-msk wh-msk active-anim"
                  : "slider bl-msk wh-msk"
            }
         >
            {index === current && <img className='imgInfo' src={slide} alt="appartement à louer" />}
            {index === current && (
               <span className="slider__number">
                  {current + 1}/{length}
               </span>
            )}
         </div>
      ))}
   </section>
);
};

export default Composant_img;