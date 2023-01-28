import IdLocation from './fonctions_infos_location/recuperationId';

const etoiles = () => {

    const loc = IdLocation([0]);////infos location
    
   const AvisR = [];
   
    for (let i=0; i<loc.rating; i++)
     {AvisR.push(<div key={i} className="star starOrange"></div>);}

    for (let i=AvisR.length;i<5; i++)
     {AvisR.push(<div key={i} className="star starGrey"></div>);}
     
    return AvisR;
};


export default etoiles;