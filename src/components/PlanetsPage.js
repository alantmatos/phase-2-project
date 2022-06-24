import React, { useState, useEffect } from "react";
import PlanetsInfo from "./PlanetsInfo";
import PlanetDetails from "./PlanetDetails";
import Sun from "./Sun";
import Orbit from "./Orbit";
import Form from "./Form";
import NavBar from "./NavBar";

const PlanetsPage = () => {

  const [planets, setPlanets] = useState([{}])
  const [selectedPlanet, setSelecetdPlanet] = useState([{}])  
  

  useEffect(() => { fethPlanets() }, [])

  const fethPlanets = () => {
    fetch('http://localhost:8000/planets')
      .then(response => response.json())
      .then((json) => {setPlanets(json)})
      .catch(error => { console.log (error)})   
  }

  function handleClick(planet) {
    setSelecetdPlanet(planet)
  }

  function fetchJson () {

    fetch("http://localhost:8000/planets")
    .then(response => response.json())
    .then(data =>{
      setPlanets([...planets,data])
      fethPlanets()
    })
 }

  return (
    <>
      <PlanetsInfo planets={planets} handleClick={handleClick} selectedPlanet={selectedPlanet} fetchJson={fetchJson}  />      

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