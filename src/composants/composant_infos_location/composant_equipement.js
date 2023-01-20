import React , {useState}  from 'react';
import IdLocation from './fonctions_infos_location/recuperationId';
import { SlArrowUp,SlArrowDown } from "react-icons/sl";


const Equipement = () => {
    
    const loc = IdLocation([0]);////infos location
    
    const [equipementState, setEquipement] = useState(false);

    const Arrows = () => {
        if (equipementState) return <SlArrowUp />
        else return <SlArrowDown />}

const SpanE = ()=>{
    if (equipementState !== false)
     return (<div className="spanEquipement">{loc.equipements.map( (equipement) =>(
        <div  className="equipement" key={equipement}>- {equipement}</div>))}</div> )};

const click = () => {setEquipement(true); if(equipementState === true) return setEquipement(false);  };
    
    
    return (
        <div className="equipement">
            <button  onClick={click} id="Equipement">
                <div className="left">Equipement</div>
                 <div className="right"><Arrows /></div>
            </button>
                    <SpanE />
    </div>
    )
};

export default Equipement;