
import 'bootstrap/dist/css/bootstrap.min.css';
import './SideNav.css';

function SideNav(props) {
    return (
        <div id="sidenav-summary-div">
            <div className='flex-column justify-content-center' id="sidenav-summary">
                <ul className="nav flex-column h-100 justify-content-center align-items-start" id="sidenav-summary-links">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default SideNav