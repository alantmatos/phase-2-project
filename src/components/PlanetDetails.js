import { Link } from "react-router-dom";

const PlanetDetails = ({ planet }) => {
    return (
        <div className='planet-details'>

            <h3 className={planet.name}> {planet.name}</h3>
            <p> Avg Temperature Kelvin: {planet.temperature}</p>
            <p> Gravity: {planet.gravity}</p>

        </div>
    )
}

export default PlanetDetails;