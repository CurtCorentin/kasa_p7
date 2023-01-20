import React from 'react';
import IdLocation from './fonctions_infos_location/recuperationId';




const Composant_titre_location = () => {

    const loc = IdLocation([0]);

    return ( <div className="displayTitre">
    <div><strong>{loc.title}</strong></div>
    <div className="location">{loc.location}</div>
    <div className="tags">
    {loc.tags.map((tag)=>(<div  className="tag" key={tag}>{tag}</div>))}
    </div>
    </div>
   
    );
};

export default Composant_titre_location;