import React from 'react'
import { motion } from 'framer-motion'
import '../css/pages.css'
import styled from 'styled-components'
import data from '../data/data.json'

export const Skills = ({ style, container, item }) => {

  const Article = styled.article`
    display: flex;
    justify-content: space-evenly;
  `;

  const tech = data.skills.tech
  const knowledge = data.skills.knowledge

  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        exit={container}
        style={style}
        className='skills-container'
        id='skills'
      >
        <motion.section variants={item}>
          <h2>Tech</h2>
          <p>
            {tech.map((item) => (
              <>{item} ⎪</>
            ))}
          </p>
        </motion.section>
        <motion.section variants={item}>
          <h2>Knowledge</h2>
          <Article className="knowledge-container">
            <ul>
              <h3>Code</h3>
              {knowledge.code.map((item, index) => (
                <li key={index}>{item} </li>
              ))}
            </ul>
            <ul>
              <h3>Toolbox</h3>
              {knowledge.toolbox.map((item, index) => (
                <li key={index}>{item} </li>
              ))}
            </ul>
            <ul>
              <h3>Other</h3>
              {knowledge.other.map((item, index) => (
                <li key={index}>{item} </li>
              ))}
            </ul>
          </Article>
        </motion.section>
      </motion.div>
    </>
  )
}


