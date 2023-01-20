import './footer.css';
import logo from '../../../assets/logo_footer.svg';

function Footer(){
    return(
        <footer>
       
   <div className="KASA">
        K<img alt="Kasa" src={logo} id="logo"/>sa
            </div>
            <div className="FINISH">#2020 Kasa.all rights reserved</div>
        
        </footer>
        )
};

export default Footer