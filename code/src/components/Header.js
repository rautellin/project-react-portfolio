import React from "react"
import { Title } from "../resources/Title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/header.css"
import { Arrow } from "../resources/Arrow"

export const Header = () => {

  return (
    <>
      <header id="home">
        <div className="header-container">
          <div className="logos-container">
            <a className="logos" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="false" tabIndex="0" href="https://github.com/rautellin">
              <FontAwesomeIcon icon={['fab', 'github-alt']} />
            </a>
            <a className="logos" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="false" tabIndex="0" href="https://www.linkedin.com/in/nathalierautell/">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
            <a className="logos" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="false" tabIndex="0"
              href="https://stackoverflow.com/users/11282492/nathalie?tab=profile">
              <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
            </a>
          </div>
          <h1>Portfolio: <span>Nathalie Rautell</span></h1>
          <Title />
        </div>
        <Arrow />
      </header>
    </>
  )
}



