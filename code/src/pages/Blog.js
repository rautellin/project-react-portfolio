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
                  <a target="_blank" rel="noopener noreferrer" href={post.url}>
                    <img src={`./images/${post.image}`} alt="" />
                    <h5>{post.created}</h5>
                    <h4>{post.title}</h4>
                    <p>{post.description}<FontAwesomeIcon id="angleRight" icon="angle-right" /><FontAwesomeIcon id="angleDoubleRight" icon="angle-double-right" /></p></a>
                </article>
              </>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </>
  )
}


