import React from 'react'
import { motion } from "framer-motion"
import "../css/pages.css"
import styled from 'styled-components';
import data from '../data/data'

export const About = ({ container, item, style }) => {

  const Section = styled.section`
    background-image: url('${data.about.image}');
    background-size: cover;
    min-height: calc(100vh - 70px - 200px);
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
  `;

  const sectionStyle = {
    backgroundImage: 'url(' + data.about.image + ')',
    backgroundSize: 'cover',
    minHeight: 'calc(100vh - 70px - 200px)',
    padding: '1rem',
    margin: 0,
    display: 'flex',
    alignItems: 'center'
  }

  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        exit={container}
        style={style}
      >
        <motion.section style={sectionStyle} variants={item}>
          <motion.p variants={item}><em>{data.about.description}</em></motion.p>
        </motion.section>
      </motion.div>
    </>
  )
}



