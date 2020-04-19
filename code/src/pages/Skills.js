import React from 'react'
import { motion } from 'framer-motion'
import '../css/pages.css'
import styled from 'styled-components'

export const Skills = ({ style, container, item }) => {

  const Article = styled.article`
    display: flex;
    justify-content: space-evenly;
  `;

  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        exit={container}
        style={style}
        className='skills-container'
      >
        <motion.section variants={item}>
          <h2>Tech</h2>
          <p> HTML ⎪ CSS ⎪ JavaScript ⎪ ES6 ⎪ JSX ⎪ React ⎪ Redux ⎪ Node.js ⎪ Mongo DB ⎪ Web Accessibility ⎪ API ⎪ JSON ⎪ Cross browsing </p>
        </motion.section>
        <motion.section variants={item}>
          <h2>Knowledge</h2>
          <Article className="knowledge-container">
            <ul>
              <h3>Code</h3>
              <li>HTML5</li>
              <li>Semantic-UI</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>React.js</li>
              <li>React Native</li>
              <li>Git</li>
              <li>Node.js</li>
            </ul>
            <ul>
              <h3>Toolbox</h3>
              <li>Visual Studio Code</li>
              <li>Emmet</li>
              <li>Github</li>
              <li>Chrome Dev Tool</li>
              <li>Firefox Dev Tool</li>
              <li>Npm</li>
              <li>Postman</li>
              <li>Gapplin</li>
              <li>JIRA</li>
              <li>Figma</li>
              <li>Slack</li>
            </ul>
            <ul>
              <h3>Other</h3>
              <li>Life insurance</li>
              <li>Money laundry</li>
              <li>Investment</li>
              <li>E-commerce</li>
              <li>Fraud</li>
              <li>POS</li>
            </ul>
          </Article>
        </motion.section>
      </motion.div>
    </>
  )
}


