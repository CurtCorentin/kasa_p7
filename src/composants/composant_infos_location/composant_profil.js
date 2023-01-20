import React from 'react';
import IdLocation from './fonctions_infos_location/recuperationId';
import Etoiles from './composant_profil_etoiles';
const Composant_profil = () => {
    const loc = IdLocation([0]);
    return (
      
        <div className="displayProfil">
        <div className="profil"> <div className="nomProfil"> {loc.host.name} </div><div className="imgProfil"></div> 
        </div>
        <div className="displayStar" id="displayStar">
           {<Etoiles />}
        </div>
       </div> 
    );
};

export default Composant_profil;