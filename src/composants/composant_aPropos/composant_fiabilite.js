import React,{useState} from 'react';
import Apropos from '../../dataBase/Apropos.json'

const Composant_fiabilite = () => {
 const [fiabilite, setFiabilite] = useState(false);

    const fiabiliteJSON = Apropos[0].fiabilite;

    const SpanFiabilite = ()=>{
        if (fiabilite !== false) 
    return (<div className="spanPropos">{fiabiliteJSON}</div> ) };

    const clickFiabilite = () => {setFiabilite(true); 
        if(fiabilite === true) 
        return setFiabilite(false);};
    return (
        
        <div className="aPropos">
        <button onClick={clickFiabilite} id="Fiabilite">Fiabilité</button>
        <SpanFiabilite />
        </div>
    );
};

export default Composant_fiabilite;