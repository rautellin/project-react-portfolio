import React from 'react'
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../css/pages.css"
import data from '../data/data.json'

export const Blog = ({ container, item, style }) => {

  const blogPosts = data.blog.posts

  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='visible'
        exit={container}
        style={style}
      >
        <motion.section id="blog" variants={item}>
          <h2>My thoughts</h2>
          <div className="blog-post-container">
            {blogPosts.map((post, index) => (
              <>
                <article key={index}>
                  <img src={`./images/${post.image}`} alt="" />
                  <h5>{post.created}</h5>
                  <h4>{post.title}</h4>
                  <p>{post.description}<a target="_blank" rel="noopener noreferrer" href={post.url}><FontAwesomeIcon icon="angle-double-right" /></a></p>
                </article>
              </>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}


