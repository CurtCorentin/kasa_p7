import './locations.css';
import locations from '../../dataBase/Locations.json';




function Locations(){
    return (
      
      <div id="locationsId">
        <div className='locations'>

        {locations.map(({ id, title ,cover }) => (

          <a href={`http://localhost:3000/InfoLocation/${id}`} className="a" alt={title} key={id}>
          <div id={id}>
            <img  src={cover} alt={title} />
          <div className="title">{title}</div>
          </div>
          </a>
            )

            )}
    </div>
    </div>
    
       )
};



export default Locations;