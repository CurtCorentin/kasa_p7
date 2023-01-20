import './infosLocation.css' ;

import Img from './composant_img'
import TitreLoc from './composant_titre_location'
import Profil from './composant_profil'
import SpanD from './composant_description'
import SpanE from './composant_equipement'
import IdLocation from './fonctions_infos_location/recuperationId';
import ErreurUrl from '../composant_erreur_url/erreurUrl';


function InfoLocation() {
   
    const loc = IdLocation([0])
if ( loc === undefined )return <ErreurUrl/>
else
    return(
    
   <>
           <Img />
          <div className="displayBlock">
          <TitreLoc/>
          <Profil/>
          </div>

          <div className="desEquipement">
          <SpanD />
          <SpanE />
          </div>

    </> )

        };


export default InfoLocation ;