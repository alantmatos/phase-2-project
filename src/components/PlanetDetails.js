import { Link } from "react-router-dom";

const PlanetDetails = ({ planet }) => {
    return (
        <div className='planet-details'>           

            <h3 className={planet.englishName}> {planet.englishName}</h3>
            <p> discovered By: {planet.discoveredBy}</p>
            <p> discovery Date: {planet.discoveryDate}</p>
            <p> Avg Temperature Kevin: {planet.avgTemp}</p>
            <p> bodyType: {planet.bodyType}</p>
            <p> gravity: {planet.gravity}</p>
            
            </div>
    )
}

export default PlanetDetails;