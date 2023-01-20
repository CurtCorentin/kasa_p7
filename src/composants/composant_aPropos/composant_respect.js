import React,{ useState} from 'react';
import Apropos from '../../dataBase/Apropos.json'

const Composant_respect = () => {
    const [respect, setRespect] = useState(false);
    const respectJSON = Apropos[0].respect;

    const SpanRespect = ()=>{
        if (respect !== false)
    return (<div className="spanPropos">{respectJSON}</div>)};

    const clickRespect = () => {setRespect(true); 
        if(respect === true) 
        return setRespect(false);};
        
    return (
        <div className="aPropos">
        <button onClick={clickRespect} id="Respect">Respect</button> 
        <SpanRespect /></div>
    );
};

export default Composant_respect;