import { useState } from "react";
import left from "../../assets/images/vector-left.svg";
import right from "../../assets/images/vector-right.svg";

export default function Carrousel({ slides }) {
//HOOK POUR CREER INDEX
const [current, setCurrent] = useState(0); 

//JE RECUPERE LA LONGUEUR DU TABLEAU
const length = slides.length; 

//LOGIQUE POUR REPARTIR AU PREMIER QUAND ON ARRIVE AU DERNIER 
const nextSlide = () => {setCurrent(current === length - 1 ? 0 : current + 1);};

//LOGIQUE POUR REPARTIR AU DERNIER QUAND ON ARRIVE AU  PREMIER
const prevSlide = () => {setCurrent(current === 0 ? length - 1 : current - 1);};

return (
//LOGIQUE POUR AFFICHAGE DES FLECHES SEULEMENT SI IL Y A PLUS D'UNE IMAGE
		<section id="carrousel-container">
			{length > 1 && (
				<img
					src={left} 
					alt="gauche"
					onClick={prevSlide}
					className="leftArrow"
				/>
			)}
			{length > 1 && (
				<img
					src={right}
					alt="droite"
					onClick={nextSlide}
					className="rightArrow"
				/>
			)}

			{///////////////////////////////////////
			slides.map((slide, index) => (
	
				<div
		           key={index} 
					className={
						current === index
							? "slider bl-msk wh-msk active-anim"
							: "slider bl-msk wh-msk"
					}
				>
					{index === current && <img src={slide} alt="appartement à louer" />}
				</div>
			))}
		</section>
	);
}
