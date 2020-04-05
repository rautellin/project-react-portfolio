import React from 'react'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChevronCircleDown, faAngleDown)

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
