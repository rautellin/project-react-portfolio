import React from 'react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/pages.css"
import data from '../data/data.json'

export const Projects = ({ container, item, style }) => {

  const featuredProjects = data.projects.featured
  const otherProjects = data.projects.other

  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        exit={container}
        style={style}
      >
        <motion.section id="projects" variants={item}>
          <h2>Featured projects</h2>
          <div className="featured-projects-container">
            {featuredProjects.map((project, index) => (
              <>
                <article key={index}>
                  <a href={project.url} className="project-image">
                    <img src={`./images/${project.image}`} alt="" />
                    <h4>{project.title}</h4>
                  </a>
                  <h5>{project.created}</h5>
                  <p>{project.description}<a href={project.url}><FontAwesomeIcon icon="angle-double-right" /></a></p>
                  <ul>
                    {project.tech.map((item, index) => (
                      <>
                        <li key={index}>{item}</li>
                      </>
                    ))}
                  </ul>
                </article>
              </>
            ))}
          </div>
          <div className="other-projects-container">
            <h3>Other projects</h3>
            {otherProjects.map((project, index) => (
              <>
                <article key={index}>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <ul>
                    {project.tech.map((item, index) => (
                      <>
                        <li key={index}>{item}</li>
                      </>
                    ))}
                  </ul>
                </article>
              </>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}



