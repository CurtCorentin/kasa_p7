import React,{ useState} from 'react';
import Apropos from '../../dataBase/Apropos.json'

const Composant_service = () => {
    const [service, setService] = useState(false);
    const serviceJSON = Apropos[0].service;

    const SpanService = ()=>{
        if (service !== false)
    return (<div className="spanPropos">{serviceJSON}</div>)};

    const clickService = () => {setService(true); 
        if(service === true) 
        return setService(false);};

    return (
        <div className="aPropos">
        <button onClick={clickService} id="Service">Service</button> 
        <SpanService/></div>
    );
};

export default Composant_service;