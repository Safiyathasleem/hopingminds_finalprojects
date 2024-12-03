import Home from "./Home";
import About from "./about";
 import Addvehicle from "./Addvehicle";
import VehicleList from "./VehicleList";
import Navbar from "./navbar";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/VehicleList" element={<VehicleList/>}/>
      <Route path="/Addvehicle" element={<Addvehicle/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
