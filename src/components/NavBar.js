import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <div>
                <Link to="/about">
                    About Us
                </Link>
            </div>
            <div>
                <Link to="/about-the-api">
                    About the API
                </Link>
            </div>
            <div>
                <Link to='/home'>
                    Home</Link>
            </div>
        </div>
    );
}

export default NavBar;