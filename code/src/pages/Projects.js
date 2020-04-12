import React from 'react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/pages.css"
import data from '../data/data'

export const Projects = ({ container, item, style }) => {

  const featuredProjects = data.projects.featured

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
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente natus dolores provident? Consequatur deserunt autem assumenda dignissimos velit vero expedita. <a target="_blank" rel="noopener noreferrer" href="https://youtube.com"><FontAwesomeIcon className="angle-double-right" icon="angle-double-right" /></a></p>
          </article>
        </motion.section>
      </motion.div>
    </>
  )
}



