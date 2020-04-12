import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import "../css/pages.css"
import styled from 'styled-components';
import data from '../data/data'

export const About = ({ pageTransition, pageVariants, style }) => {

  const Section = styled.section`
    background-image: url('${data.about.image}');
    background-size: cover;
    min-height: calc(100vh - 70px - 200px);
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
  `;

  return (
    <>
      <motion.div
        initial={pageVariants.initial}
        animate={pageVariants.in}
        exit={pageVariants.out}
        transition={pageTransition}
        style={style}>
        <Section>
          <p><em>{data.about.description}</em></p>
        </Section>
      </motion.div>
    </>
  )
}



