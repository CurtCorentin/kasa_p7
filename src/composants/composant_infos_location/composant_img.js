import React from 'react';
import locations from '../../dataBase/Locations.json';
import IdLocation from './fonctions_infos_location/recuperationId';
import { IoIosArrowBack,IoIosArrowForward } from "react-icons/io";

const Composant_img = () => {

const loc = IdLocation([0]);////infos location

let Url = window.location.toString().split("/");
let idUrl = Url[Url.length-1]


let idLocations = []
var indexLocation = 0
for (let i in locations)idLocations.push(locations[i].id);
for (let i in idLocations )if(idLocations[i] === idUrl)indexLocation = i;

const majUrl = () => {
Url.pop()
Url.push(idUrl)
window.location = Url.join("/")
console.log(idUrl,"idUrl",indexLocation,"indexLocation");
}

const indexDown = () =>{
--indexLocation;

if(indexLocation < 0 ){
indexLocation = idLocations.length-1;
idUrl = idLocations[indexLocation]
majUrl()

}else {
idUrl = idLocations[indexLocation];
majUrl()
}
}

const indexUp = () =>{
++indexLocation

if(indexLocation >= idLocations.length ){
indexLocation =0
idUrl = idLocations[indexLocation];
majUrl()

}else {
idUrl = idLocations[indexLocation];
majUrl()
}
}

return (
<div className="divimgInfo">
<button className="carrousselDown" onClick={indexDown}><IoIosArrowBack/></button>
<img className="imgInfo" src={loc.cover} alt={loc.title} /> 
<button className="carrousselUp" onClick={indexUp}><IoIosArrowForward/></button>
</div>
);
};

export default Composant_img;