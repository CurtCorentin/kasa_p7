import React from 'react';
import Header from '../composants/composants_réutilisable/composant_header/header';
import Paysage from '../composants/composants_réutilisable/composant_paysage/paysage';
import Footer from '../composants/composants_réutilisable/composant_footer/footer';
import Propos from '../composants/composant_aPropos/aPropos';


const Apropos = () => {
    return (
        <>
           <Header />
           <Paysage />
            <Propos />
            <Footer />
        </>
    );
};

export default Apropos;