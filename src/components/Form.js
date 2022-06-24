import { useHistory } from "react-router-dom";


const Form = ({ fetchJson }) => {

  const history = useHistory();

  function handleClick(e) {

    fetch('http://localhost:8000/planets', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(({
        "name": e.target.planetName.value,
        "temperature": e.target.temperature.value,
        "gravity": e.target.gravity.value,
      }))
    })
      .then(() => {

        console.log('Planets Added')
        history.push("/home")
        fetchJson()
      })
      
      
  };


  return (

    <div className="about-us">

      <form onSubmit={handleClick}>
        <input type="text" name="planetName" placeholder="Planet Name" />
        <input type="text" name="temperature" placeholder="Avg Temp. Kelvin:" />
        <input type="text" name="gravity" placeholder="Gravity:" />
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