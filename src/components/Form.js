import { useHistory } from "react-router-dom";


const Form = ({ fetchJson }) => {

  const history = useHistory();

  function handleClick(e) {

    fetch('http://localhost:8000/planets', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(({
        "name": e.target.planetName.value,
        "discoveredBy": e.target.discoveredBy.value,
        "discoveredDate": e.target.discoveryDate.value,
        "temperature": e.target.temperature.value,
        "bodyType": e.target.bodyType.value,
        "gravity": e.target.gravity.value,
        "density": e.target.density.value,
        "dimension": e.target.dimension.value,
      }))
    })
      .then(() => {

        console.log('Planets Added')
        
        fetchJson()
      })
      
      history.push("/home")
  };


  return (

    <div className="about-us">

      <form onSubmit={handleClick}>
        <input type="text" name="planetName" placeholder="Planet Name" />
        <label>  </label>
        <input type="text" name="discoveredBy" placeholder="Discovered By:" />
        <label>  </label>
        <input type="text" name="discoveryDate" placeholder="Discovery Date:" />
        <label>  </label>
        <input type="text" name="temperature" placeholder="Avg Temp. Kevin:" />
        <label>  </label>
        <input type="text" name="bodyType" placeholder="BodyType:" />
        <label>  </label>
        <input type="text" name="gravity" placeholder="Gravity:" />
        <label>  </label>
        <input type="text" name="density" placeholder="Density:" />
        <label>  </label>
        <input type="text" name="dimension" placeholder="Dimension:" />
        <hr></hr>
        <input
          type="submit"
          name="submit"
          value="Add if yourself"
          className="submit"
        />
      </form>
    </div>
  );
}

export default Form;