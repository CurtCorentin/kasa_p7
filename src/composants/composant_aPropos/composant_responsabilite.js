import React , {useState} from 'react';
import Apropos from '../../dataBase/Apropos.json'

const Composant_responsabilite = () => {


const [responsabilite, setResponsabilite] = useState(false);
const responsabiliteJSON = Apropos[0].responsabilite;

const SpanResponsabilite = ()=>{
    if (responsabilite !== false)
return (<div className="spanPropos">{responsabiliteJSON}</div>)};

const clickResponsabilite = () => {setResponsabilite(true); 
if(responsabilite === true) 
return setResponsabilite(false);};

    return (
        <div className="aPropos">
        <button onClick={clickResponsabilite} id="Responsabilté">Responsabilté</button> 
        <SpanResponsabilite/></div>
    );
};

export default Composant_responsabilite;