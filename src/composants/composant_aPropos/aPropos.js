import './aPropos.css';
import React from 'react';
import SpanFiabilite from './composant_fiabilite'
import SpanRespect from './composant_respect'
import SpanService from './composant_service'
import SpanResponsabilite from './composant_responsabilite'

function Propos(){




    return (
        
<div className="displayPropos">

        <SpanFiabilite/>
        <SpanRespect />
        <SpanService/>
        <SpanResponsabilite/>

</div>
       
        )
};

export default Propos;