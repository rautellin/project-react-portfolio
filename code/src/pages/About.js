import React from 'react'
import "../css/pages.css"
import styled from 'styled-components';
import data from '../data/data'

export const About = () => {

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
      <main>
        <Section>
          <p><em>{data.about.description}</em></p>
        </Section>
      </main>
    </>
  )
}



