import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/pages.css"

export const Projects = () => {

  return (
    <>
      <main>
        <section id="projects">
          <h2>Featured projects</h2>
          <article>
            <h5>April 2020</h5>
            <h4>Title of blogpost</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus dolores provident? Consequatur deserunt autem assumenda dignissimos velit vero expedita. <a target="_blank" rel="noopener noreferrer" href="https://youtube.com"><FontAwesomeIcon className="angle-double-right" icon="angle-double-right" /></a></p>
          </article>
          <article>
            <h5>April 2020</h5>
            <h4>Title of blogpost</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus dolores provident? Consequatur deserunt autem assumenda dignissimos velit vero expedita. <a target="_blank" rel="noopener noreferrer" href="https://youtube.com"><FontAwesomeIcon className="angle-double-right" icon="angle-double-right" /></a></p>
          </article>
          <article>
            <h3>Other projects</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus dolores provident? Consequatur deserunt autem assumenda dignissimos velit vero expedita. <a target="_blank" rel="noopener noreferrer" href="https://youtube.com"><FontAwesomeIcon className="angle-double-right" icon="angle-double-right" /></a></p>
          </article>
        </section>
      </main>
    </>
  )
}



