import React from "react"
import { Title } from "../resources/Title"
import { SmallTitle } from "../resources/SmallTitle"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/header.css"
import data from '../data/data'
import { useMediaQuery } from '../hooks/useMediaQuery'

export const Header = () => {

  const isMobile = useMediaQuery('(max-width: 500px)')

  const hero = {
    backgroundImage: isMobile ? 'url(' + data.about.mobilehero + ')' : 'url(' + data.about.hero + ')',
    backgroundSize: 'cover'
  }

  // PARALLAX SCROLL

  const parallax = document.querySelectorAll(".parallax");

  const parallaxScroll = () => {
    if (!isMobile) {
      let offset = window.pageYOffset;
      parallax.forEach((prllx) => {
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
      })
    }
  }


  window.addEventListener("scroll", parallaxScroll)


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
          {isMobile ? <SmallTitle /> : <Title />}
        </div>

      </header>
    </>
  )
}



