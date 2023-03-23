
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'


function Header() {

   


    return (


        <nav className="navbar navbar-opaque navbar-expand-lg navbar-light sticky-top">
            <div className="container-fluid">
                <NavLink className="navbar-brand brand-opaque" to="#">FaveBall</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav justify-content-center">
                        <li className="nav-item brand-opaque">
                            <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item brand-opaque">
                            <NavLink className="nav-link" to="/live">Live</NavLink>
                        </li>
                        <li className="nav-item brand-opaque">
                            <NavLink className="nav-link" to="/saved">Comparison</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Header