
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink exact to="/" activeClassName="active">About Me</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/resume" activeClassName="active">Resume</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
/* FILL PLACEHOLDERS */