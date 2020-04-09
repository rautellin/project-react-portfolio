import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/footer.css"

export const Footer = () => {

  return (
    <>
      <footer id="contact">
        <h4>Contact</h4>
        <p>Nathalie Rautell</p>
        <a href="mailto: nathalie.rautell@gmail.com">nathalie.rautell@gmail.com</a>
        <a href="tel:+46724303362">072-430 33 62</a>
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
      </footer>
    </>
  )
}
