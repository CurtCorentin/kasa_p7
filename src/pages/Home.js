import React from 'react';
import Header from '../composants/composants_reutilisable/composant_header/header';
import Paysage from '../composants/composants_reutilisable/composant_paysage/paysage';
import Locations from '../composants/composant_locations/locations';
import Footer from '../composants/composants_reutilisable/composant_footer/footer';

const Home = () => {
    return (
        <>
            <Header />
            <Paysage />
            <Locations />
            <Footer />
        </>
    );
};

export default Home;