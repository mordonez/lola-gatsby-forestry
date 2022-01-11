import React, { useState } from "react";
import { Link } from "gatsby";
import logo from "../img/logo.png";
import useMenu from '@hooks/useMenu'

const Navbar = () => {
  const { navigation } = useMenu()

  const [isActive, setIsActive] = useState(false);
  return (

    <nav className="navbar is-fixed-top " role="navigation" aria-label="main navigation">
      <div className="container">
      <div className="navbar-brand">
          <Link to="/" className="navbar-item">
            <img src={logo} width="180" />
          </Link>

        {/* Hamburger menu */}
        <button
          className={`navbar-burger  ${isActive && "is-active"}`}
          aria-expanded={isActive}
          aria-label="menu"
          onClick={() => setIsActive(!isActive)}
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive && "is-active"}`}>

        <div className="navbar-start"></div>
        <ul className="navbar-end">
          {navigation.map((link, id) => (
            <li key={id} className="navbar-item" >
              <Link className="navbar-item" to={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </nav>
  )

};

export default Navbar;
