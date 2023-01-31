import emptyStar from "../../assets/images/emptyStar.svg";
import fullStar from "../../assets/images/star-rate.svg";

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		//AFFICHAGE ETOILE PLEINE SI LE SCORE EST SUPERIEUR 
		//OU EAGAL A LA VALEUR COURANTE DU TABLEAU
		<div className="rate-comp">
			{stars.map((level) =>
				score >= level ? (
					<img
						key={level.toString()}
						className="star"
						src={fullStar}
						alt="rating star"
					/>
				) : ( 
					<img
						key={level.toString()}
						className="star"
						src={emptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}
