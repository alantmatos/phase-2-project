import { Link } from "react-router-dom";

const PlanetDetails = ({ planet }) => {
    return (
        <div className='planet-details'>           

            <h3 className={planet.englishName}> {planet.englishName}</h3>
            <p> Discovered By: {planet.discoveredBy}</p>
            <p> Discovery Date: {planet.discoveryDate}</p>
            <p> Avg Temperature Kevin: {planet.avgTemp}</p>
            <p> BodyType: {planet.bodyType}</p>
            <p> Gravity: {planet.gravity}</p>
            <p> Density: {planet.density}</p>            
            <p> Dimension: {planet.dimension}</p>
            
            </div>
    )
}

export default PlanetDetails;