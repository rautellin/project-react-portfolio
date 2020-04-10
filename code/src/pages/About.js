import React from 'react'
import "../css/pages.css"
import styled from 'styled-components';
import img from '../resources/background.JPG'

export const About = () => {

  const Section = styled.section`
    background-image: url(${img});
    background-size: cover;
    min-height: calc(100vh - 70px - 200px);
    padding: 1rem;
    margin: 0;
    display: flex;
    align-items: center;
  `;

  return (
    <>
      <main>
        <Section>
          <p><em>You either find me typing on a keyboard or at the gym somewhere between the weights. So basically I'm always building something, if not websites and apps then physical strength. </em></p>
        </Section>
      </main>
    </>
  )
}



