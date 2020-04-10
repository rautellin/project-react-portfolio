import React from 'react'
import { NavLink } from 'react-router-dom'
import "../css/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navbar = () => {
  return (
    <>
      <nav id="nav">
        <ul>
          <div className="icon-container">
            <a id="top" href="#top">
              <FontAwesomeIcon id="topOne" icon="angle-up" />
              <FontAwesomeIcon id="topTwo" icon="angle-double-up" />
            </a>
            <a id="envelope" href="#contact">
              <FontAwesomeIcon id="envelopeClose" icon="envelope" />
              <FontAwesomeIcon id="envelopeOpen" icon="envelope-open" />
            </a>
            <NavLink id="home" href="#home" to="/about">
              <FontAwesomeIcon id="house" icon="home" />
              <FontAwesomeIcon id="houseUser" icon="house-user" />
            </NavLink>
          </div>
          <div className="nav-container">
            <li><NavLink to="/skills">Skills</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
          </div>
        </ul>
      </nav>
    </>
  )
}
