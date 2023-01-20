import Home from './pages/Home';
import InfosLocation from './pages/InfoLocations';
import Apropos from './pages/Apropos';
import UrlNotFound from './pages/UrlNotFound';

import {BrowserRouter,Route,Routes} from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
    
     <Routes>
       <Route path="/"exact element={<Home/>} />
       <Route path="/InfoLocation/:id" element={<InfosLocation/>} />
       <Route path="/Apropos" element={<Apropos/>} />
       <Route path="*" element={<UrlNotFound/>} />
       </Routes>
     
     </BrowserRouter>
 </> );
}

export default App;
