

const PlanetsCard = ({ planet, handleClick }) => {

    return (

        <div className="planet-button-section">
            <button className='planet-button' onClick={() => { handleClick(planet) }}>{planet.englishName}</button>
        </div>
    );
}

export default PlanetsCard;