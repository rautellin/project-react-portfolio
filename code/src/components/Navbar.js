import React from 'react'
import "../css/navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const Navbar = () => {
  return (
    <>
      <nav>
        <ul>
          <div className="icon-container">
            <a id="top">
              <FontAwesomeIcon id="topOne" icon="angle-up" />
              <FontAwesomeIcon id="topTwo" icon="angle-double-up" />
            </a>
            <a id="envelope">
              <FontAwesomeIcon id="envelopeClose" icon="envelope" />
              <FontAwesomeIcon id="envelopeOpen" icon="envelope-open" />
            </a>
          </div>
          <li>About</li>
          <li>Tech</li>
          <li>Projects</li>
        </ul>
      </nav>
    </>
  )
}
