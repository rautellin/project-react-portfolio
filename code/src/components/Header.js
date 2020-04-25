import React from "react"
import { Title } from "../resources/Title"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/header.css"
import { Arrow } from "../resources/Arrow"
import data from '../data/data'
import { useMediaQuery } from '../hooks/useMediaQuery'

export const Header = () => {

  const isMobile = useMediaQuery('(min-width: 500px)')

  const hero = {
    backgroundImage: isMobile ? 'url(' + data.about.hero + ')' : 'url(' + data.about.mobilehero + ')',
    backgroundSize: 'cover'
  }


  return (
    <>
      <header id="top" style={hero} className="top parallax">
        <div className="header-container">
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
          <h1>Portfolio: <span>{data.about.name}</span></h1>
          <Title />
        </div>
        <Arrow />
      </header>
    </>
  )
}



