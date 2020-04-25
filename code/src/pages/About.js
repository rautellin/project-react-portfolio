import React from 'react'
import { motion } from "framer-motion"
import "../css/pages.css"
import data from '../data/data'
import { useMediaQuery } from '../hooks/useMediaQuery'

export const About = ({ container, item, style }) => {

  const isMobile = useMediaQuery('(min-width: 500px)')

  const sectionStyle = {
    backgroundImage: 'url(' + data.about.image + ')',
    backgroundSize: 'cover',
    minHeight: '600px',
    height: 'calc(100vh - 70px - 200px)',
    padding: '1rem',
    margin: 0,
    display: 'flex',
    backgroundImage: isMobile ? 'url(' + data.about.image + ')' : 'url(' + data.about.mobileimage + ')',
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
        <motion.section style={sectionStyle} variants={item} className='about' id='about'>
          <motion.div variants={item}>
            <p>You either find me typing on a keyboard or at the gym somewhere between the weights. So basically I'm always building something, if not websites and applications then physical strength. </p>
            <p>My love for coding goes way back. After years apart, our paths once again crossed. I finally realized its ability to stimulate my mind and curiosity, and now we’re living happily ever after. <br /><br />
            As with any relationship, there are conflicts. But that’s the only way to grow. At the same time, the beauty of this endless path of learning is found in these challenges. </p>
          </motion.div>
        </motion.section>
      </motion.div>
    </>
  )
}



