import './SideNavLink.css'


function SideNavLink(props) {
const {index, name, click, idnum} = props
    return (
        <li className="sidenav-link nav-item">
            <a className="nav-link active" onClick={click} aria-current="page" idnum= {idnum} href="#" key={ index }>{ name }</a>
        </li>
             
)}

export default SideNavLink