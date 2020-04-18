import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navbar = () => {

  return (
    <>
      <nav id="nav" className="menu">
        <div className="nav-container">
          <div className="icon-container">
            <a className="icon-item" id="top" href="#top">
              <FontAwesomeIcon id="topOne" icon="angle-up" />
              <FontAwesomeIcon id="topTwo" icon="angle-double-up" />
            </a>
            <a className="icon-item" id="envelope" href="#contact">
              <FontAwesomeIcon id="envelopeClose" icon="envelope" />
              <FontAwesomeIcon id="envelopeOpen" icon="envelope-open" />
            </a>
            <NavLink className="icon-item" id="home" href="#home" to="/about">
              <FontAwesomeIcon id="house" icon="home" />
              <FontAwesomeIcon id="houseUser" icon="house-user" />
            </NavLink>
          </div>
          <div className="hamburger" className="menu-btn">
            <div className="line" className="btn-line"></div>
            <div className="line" className="btn-line"></div>
            <div className="line" className="btn-line"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item current"><NavLink to="/skills" className="nav-link">Skills</NavLink></li>
            <li className="nav-item"><NavLink to="/projects" className="nav-link">Projects</NavLink></li>
            <li className="nav-item"><NavLink to="/blog" className="nav-link">Blog</NavLink></li>
          </ul>
        </div>
      </nav>
    </>
  )
}
