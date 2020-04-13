import React from 'react'
import { motion } from "framer-motion"
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
          {featuredProjects.map((project, index) => (
            <>
              <article key={index}>
                <img src={`./images/${project.image}`} alt="" />
                {console.log(project.image)}
                <h5>{project.created}</h5>
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
          <article>
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
          </article>
        </motion.section>
      </motion.div>
    </>
  )
}



