import './navbar.css'
export default function Navbar() {
  return (
    <>
        <nav>
            <a className="logo-wrap" >
                <span className='logo'>LOGO</span>
            </a>
            <ul className="main-navbar">
                <li className='nav-li'><a className='nav-a'></a></li>
                <li className='nav-li'><a className='nav-a'>About</a></li>
                <li className='nav-li'><a className='nav-a'>Services</a></li>
                <li className='nav-li'><a className='nav-a'>Contact</a></li> 
            </ul>
        </nav>
    </>
  )
}