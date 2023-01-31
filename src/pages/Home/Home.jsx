import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Cards/Card";
import { NavLink } from "react-router-dom";
import axios from "axios";

export default function Home() {
	const [data, setData] = useState([]);
 //REQUETE AXIOS EN AMONT POUR UNE FUTUR API
	useEffect(() => {
		axios.get("/logements.json").then((res) => setData(res.data));
	}, []);
	
	return (
		<>
			<Banner />
			<div className="cards-container">
				{data.map((appart, index) => (
					<div className="card_logement" key={index}>
						<NavLink className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</NavLink>
					</div>
				))}
			</div>
		</>
	);
}
