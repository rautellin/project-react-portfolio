import React from 'react'

export const SmallerTitle = () => {

  document.addEventListener('DOMContentLoaded', () => {

    const animateSGV = () => {
      const arrow = document.getElementById('visible')
      arrow.style.transitionDelay = `3s`
      arrow.style.webkitTransitionDelay = `3s`
      arrow.style.background = `rgb(179, 149, 174)`
      arrow.style.color = `white`
    }

    animateSGV('title', 0, 0.25)

  }, false)

  const title = {
    textTransform: 'lowercase',
    color: 'white',
    fontSize: '50px',
    fontWeight: 800,
    fontFamily: "'Montserrat', sans-serif"
  }

  return (
    <>
      <div className="container">
        <h1 style={title}>web developer</h1>
      </div>
    </>
  )
}



