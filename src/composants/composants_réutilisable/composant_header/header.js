import './header.css';

import logo from '../../../assets/logo.svg';

function Header(){


    return (
        <header>
        <div className="header">
            <div className="TITRE">
        K<img alt="Kasa" src={logo}/>sa
            </div>
            <div>
                <div className="NAV">
                    <div><a href="http://localhost:3000/">Accueil</a></div>
                    <div><a href="http://localhost:3000/Apropos" >A propos</a></div>
                </div>
            </div>
        </div>
        </header>
       )
};

export default Header;