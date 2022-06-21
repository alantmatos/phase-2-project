import React, { useState, useEffect } from "react";
import PlanetsInfo from "./PlanetsInfo";
import PlanetDetails from "./PlanetDetails";
import Sun from "./Sun";
import Orbit from "./Orbit";

const PlanetsPage = () => {

  const [planets, setPlanets] = useState([{}])
  const [selectedPlanet, setSelecetdPlanet] = useState([{}])


  useEffect(() => { fethAPlanets() }, [])

  const fethAPlanets = () => {
    fetch('https://api.le-systeme-solaire.net/rest/bodies')
      .then(response => response.json())
      .then((json) => {
        const planets = json.bodies.filter(
          (item) => { return item.isPlanet == true })
        setPlanets(planets)
      })
      .catch(error => { console.log (error)})
  }

  function handleClick(planet) {
    setSelecetdPlanet(planet)
    //console.log(planet)
  }

console.log(planets)

  return (
    <>
      <PlanetsInfo planets={planets} handleClick={handleClick} selectedPlanet={selectedPlanet} />

      <div className='solar-system'>

<Sun />
{Orbit("mercury-orbit", "mercury")}
{Orbit("venus-orbit", "venus")}
{Orbit("earth-orbit", "earth")}
{Orbit("mars-orbit", "mars")}
{Orbit("jupiter-orbit", "jupiter")}
{Orbit("saturn-orbit", "saturn")}
{Orbit("neptune-orbit", "neptune")}
{Orbit("uranus-orbit", "uranus")}



</div>

    </>


  );
}

export default PlanetsPage;