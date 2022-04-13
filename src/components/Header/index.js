import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <Link to="/">
      <li className="nav-items">Home</li>
    </Link>
    <Link to="/about">
      <li className="nav-items">About</li>
    </Link>
  </nav>
)
export default Header
