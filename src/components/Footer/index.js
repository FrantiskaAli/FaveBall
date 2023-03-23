import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink} from 'react-router-dom';
import './style.css';

function Footer() {
    return (
        <footer class="py-3">
            <ul class="nav justify-content-center border-bottom pb-3">
                <li class="nav-item"><NavLink to="/home" class="px-2 mx-5 text-color-warning">Home</NavLink></li>
                <li class="nav-item"><NavLink to="/live" class="px-2 mx-5 text-color-warning">Live</NavLink></li>
                <li class="nav-item"><NavLink to="/saved" class="px-2 mx-5 text-color-warning">Comparison</NavLink></li>
            </ul>
            <p class="text-center text-color-warning">© 2023 FaveBall, Inc.</p>
        </footer>
    )
}

export default Footer