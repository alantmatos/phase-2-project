import PlanetsCard from "./PlanetsCard";
import PlanetDetails from "./PlanetDetails";
import Form from "./Form";


const PlanetsInfo = ({ planets, handleClick, selectedPlanet, fetchJson }) => {

    return (
        <>
            {
                planets.map(planet => (<PlanetsCard key={planet.id} planet={planet} handleClick={handleClick} />))
            }
            {
                <PlanetDetails key={selectedPlanet.id} planet={selectedPlanet} />
            }
        </>
    );
}

export default PlanetsInfo;