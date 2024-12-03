import { useEffect, useState } from "react";
import axios from 'axios';

function VehicleList(){
    const [vehicles, setVehicles] = useState([]);
    useEffect(()=> {
        const fetchVehicles = ()=> {
            axios.get(' http://localhost:5000/vehicles')
            .then(response =>{
                setVehicles(response.data);
            })
            .catch(error => {
                console.log("There was an error fetching the vehicle data !",error);
            }
        )
        }
        fetchVehicles();
    },[]);

    console.log('vehicles', vehicles);
    
    return (

        <div className="container mt - 4">
            <h2>VehicleList</h2>
            <div className="row">
                { vehicles.map(vehicle => (
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow-sm">
                            <img src={vehicle.image} className="card-img-top" alt={vehicle.name}/>
                            <div className="card-body d-flex flex column">
                                <h5 className="card-title">{vehicle.name}</h5>
                                <p className="card-text">{vehicle.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default VehicleList;