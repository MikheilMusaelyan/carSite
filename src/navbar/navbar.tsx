import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.css';
import { faMessage, faPerson } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <a className="logo-wrap">
        <Link to="/messages" className='nav-a'>
          <span className='logo'>LOGO</span>
        </Link>
      </a>
      <ul className="main-navbar">
        <li className='nav-li'>
          <Link to="/person" className='nav-a'>
            <FontAwesomeIcon icon={faPerson} />
          </Link>
        </li>
        <li className='nav-li'>
          <Link to="/car/1" className='nav-a'>
            <FontAwesomeIcon icon={faMessage} />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
