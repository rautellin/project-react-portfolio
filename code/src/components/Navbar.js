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
            <a id="top" href="#home">
              <FontAwesomeIcon id="topOne" icon="angle-up" />
              <FontAwesomeIcon id="topTwo" icon="angle-double-up" />
            </a>
            <a id="envelope" href="#contact">
              <FontAwesomeIcon id="envelopeClose" icon="envelope" />
              <FontAwesomeIcon id="envelopeOpen" icon="envelope-open" />
            </a>
          </div>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/misc">Misc</NavLink></li>
        </ul>
      </nav>
    </>
  )
}
