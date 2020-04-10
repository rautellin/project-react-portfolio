import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/footer.css"
import data from '../data/data'

export const Footer = () => {

  return (
    <>
      <footer id="contact">
        <h4>Contact</h4>
        <p>{data.about.name}</p>
        <a href={`mailto: ${data.about.email}`}>{data.about.email}</a>
        <a href={`tel: ${data.about.phone.code}`}>{data.about.phone.readable}</a>
        <div className="logos-container">
          <a className="logos" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="false" tabIndex="0" href={data.about.social[0].url}>
            <FontAwesomeIcon icon={['fab', 'github-alt']} />
          </a>
          <a className="logos" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="false" tabIndex="0" href={data.about.social[1].url}>
            <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
          </a>
          <a className="logos" target="_blank" rel="noopener noreferrer" role="button" aria-pressed="false" tabIndex="0" href={data.about.social[2].url}>
            <FontAwesomeIcon icon={['fab', 'stack-overflow']} />
          </a>
        </div>
      </footer>
    </>
  )
}
