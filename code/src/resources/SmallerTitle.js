import React from 'react'

export const SmallerTitle = () => {

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



