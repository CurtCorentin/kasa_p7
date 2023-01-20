import './erreurUrl.css'

function ErreurUrl(){
    return (
        <div className="erreur404" >
            <div className="numberErr">404</div>
            <div className="textErr">Oups! La page que vous demandez n'existe pas</div>
            <div className="redirection">
                 <a href="http://localhost:3000/" alt ="Erreur 404">Merci de retounez à l'accueil</a>
            </div>
        </div>)
};

export default ErreurUrl;