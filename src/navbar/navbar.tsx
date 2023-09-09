import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './navbar.css'
import { faMessage, faPerson } from '@fortawesome/free-solid-svg-icons'
export default function Navbar() {
  return (
    <>
        <nav>
            <a className="logo-wrap" >
                <span className='logo'>LOGO</span>
            </a>
            <ul className="main-navbar">
                <li className='nav-li'>
                  <a className='nav-a'>
                    <FontAwesomeIcon icon={faPerson} />
                  </a>
                </li>
                <li className='nav-li'>
                  <a className='nav-a'>
                    <FontAwesomeIcon icon={faMessage} />
                  </a>
                </li> 
            </ul>
        </nav>
    </>
  )
}