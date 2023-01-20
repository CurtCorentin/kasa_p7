import './paysage.css';

import paysageImg from '../../../assets/paysage.webp';

function Paysage() {
    return(
        <div className="paysage">
            
            <div className="PAYSAGE">
                <img src={paysageImg} alt="Chez vous, partout et ailleurs" />
           <div className="textpaysage"> <strong> Chez vous, partout et ailleurs</strong></div>
            </div>

        </div>)
};

export default Paysage;
//