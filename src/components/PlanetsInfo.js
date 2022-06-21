import PlanetsCard from "./PlanetsCard";
import PlanetDetails from "./PlanetDetails";


const PlanetsInfo = ({ planets, handleClick, selectedPlanet }) => {
    
    return (
        <>
            {
                planets.map(planet => (<PlanetsCard key={planet.id} planet={planet} handleClick={handleClick} />))
            }
            {
                <PlanetDetails planet={selectedPlanet} />
            }

        </>
    );
}

export default PlanetsInfo;