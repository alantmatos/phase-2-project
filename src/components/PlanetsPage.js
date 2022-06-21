import React, { useState, useEffect } from "react";
import PlanetsInfo from "./PlanetsInfo";
import PlanetDetails from "./PlanetDetails";



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
  }

  function handleClick(planet) {
    setSelecetdPlanet(planet)
    //console.log(planet)
  }


  return (
    <>
      <PlanetsInfo planets={planets} handleClick={handleClick} selectedPlanet={selectedPlanet} />      
    </>
  );
}

export default PlanetsPage;