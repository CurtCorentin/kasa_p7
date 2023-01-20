import React from 'react';
import ErreurUrl from '../composants/composant_erreur_url/erreurUrl';
import Header from '../composants/composants_réutilisable/composant_header/header';
import Footer from '../composants/composants_réutilisable/composant_footer/footer';

const UrlNotFound = () => {
    return (
        <>  <Header/>
            <ErreurUrl />  
            <Footer/>
        </>
    );
};

export default UrlNotFound;