import React from 'react';
import Header from '../composants/composants_réutilisable/composant_header/header';
import InfosLocation from '../composants/composant_infos_location/infosLocation'
import Footer from '../composants/composants_réutilisable/composant_footer/footer';
const InfoLocations = () => {
    return (
        <>
            <Header/>
            <InfosLocation/>
            <Footer/>
        </>
    );
};

export default InfoLocations;