import React , {useState} from 'react';
import IdLocation from './fonctions_infos_location/recuperationId';
import { SlArrowUp,SlArrowDown } from "react-icons/sl";
const Description = () => {

 

    const loc = IdLocation();////infos location
    
    const [descriptionState, setDescription] = useState(false);

    const Arrows = () => {
      if (descriptionState) return <SlArrowUp />
      else return <SlArrowDown />}
      
const Span = () => { if (descriptionState)  return   <div className="spanDescription">{loc.description}</div>}

const click = () => {setDescription(true); if(descriptionState) return setDescription(false);  };
    
 return ( <div className="description">
 <button  onClick={click}
type="checkbox"  id="Description">
<div className="left">Description</div>
<div className="right"><Arrows /></div>
</button>
 <Span />
   </div> ) 
    
    
};

export default Description;