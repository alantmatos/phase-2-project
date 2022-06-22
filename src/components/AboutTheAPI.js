const AboutTheAPI = () => {
    return (<div className="api">
        <h2>
            The Solar System OpenData
        </h2>
        <p>
            https://api.le-systeme-solaire.net/en/

        </p>

        <p>
            <span>Main bodies</span>
            All planets and their moons, all dwarfs planets and the main asteroids.<br></br>

            <span>Physical characteristics</span>
            Dimensions, mass, flattening, gravity, inclination and temperature.<br></br>

            <span>Orbital parameters</span>
            Semimajor axis, perihelion, aphelion, eccentricity, orbital period and orbital speed.<br></br>

            <span>History</span>
            Discovery circumstances, discoverer(s), year discovered and provisional designation.<br></br>

            <span>Family</span>
            For every body, all its satellites and the ability to navigate between satellites and the star.<br></br>

            <span>Known objects count</span>
            Known count of each object type : planets, moons, asteroids, comets.<br></br>
        </p>

    </div>
    );
}

export default AboutTheAPI;