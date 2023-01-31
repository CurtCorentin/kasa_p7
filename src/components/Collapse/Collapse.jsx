import { useState, useRef, useEffect } from "react"; 
import Chevron from "../../assets/images/vectorBas.svg";

export default function Collapse(props) {
	// HOOK BOOLEEN POUR AFFICHAGE CONDITIONNELLE 
	const [toggle, setToggle] = useState(false); 
    const toggleState = () => {setToggle(!toggle);};
// HOOK POUR RECUPERER LA HAUTEUR DU COLLAPSE
	const [heightEl, setHeightEl] = useState();
	 //RECUPERERATION DE LA HAUTEUR DU COLLAPSE
	const refHeight = useRef();
	
//useEffect s'éxécute au montage du composant, dans ce cas,
// il définit la hauteur du collapse déplié lors de sa première ouverture 
//et la conserve dans refHeight
	useEffect(() => {setHeightEl(`${refHeight.current.scrollHeight}px`)}, []);

	return (
	// affiche le collapse replié par défaut et l'ouvre au clic puis le referme au clic en faisant disparaitre le texte et le style
		<div className="collapse">
			<div onClick={toggleState} className="collapse__visible">

				<h2>{props.aboutTitle}</h2>

				<img className={toggle ? "chevron rotated" : "chevron"}
					src={Chevron}
					alt="chevron" />
			</div>

			<div ref={refHeight}
				className={toggle ? "collapse__toggle animated" : "collapse__toggle"}
				style={{ height: toggle ? `${heightEl}` : "0px" }}>

				<p >{props.aboutText}</p>

			</div>
		</div>
	);
}
