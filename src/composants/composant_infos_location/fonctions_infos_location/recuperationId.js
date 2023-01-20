import locations from '../../../dataBase/Locations.json';

const recuperationId= ()=>{
   
let location=[];

let Location = window.location.toString().split("/");
let idLocation = Location[Location.length-1]

   
 for (let i in locations) 
 {if (locations[i].id === idLocation)location.push(locations[i])};

 return location[0];
};



export default recuperationId;
