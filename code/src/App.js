import React from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp)

export const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Contact />
    </>
  )
}
