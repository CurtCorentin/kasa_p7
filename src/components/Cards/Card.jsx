// CARDS // HOME // props de du composant parent
export default function Card({ cover, title }) { 

	return (
		<div className="card-logement">
			<img src={cover} alt="location" />
			<div className="card-logement__layer">
				<p className="card-logement__title">{title}</p>
			</div>
		</div>
	);
}
