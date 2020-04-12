import React from 'react'
import { AnimatePresence } from "framer-motion"
import { Switch, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { About } from './pages/About'
import { Skills } from './pages/Skills'
import { Projects } from './pages/Projects'
import { Blog } from './pages/Blog'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp, faAngleDoubleRight, faHome, faHouseUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp, faAngleDoubleRight, faHome, faHouseUser)

const pageVariants = {
  initial: {
    opacity: 0,
    x: '-100vw',
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: 0,
    scale: 1
  },
  out: {
    opacity: 0,
    x: '100vw',
    scale: 1.2
  }
}

const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.5
}

const pageStyle = {
  position: 'absolute'
}

export const App = () => {

  const location = useLocation()

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <AnimatePresence >
          <Switch location={location} key={location.pathname}>
            <Route path="/" exact>
              <About pageTransition={pageTransition} pageVariants={pageVariants} style={pageStyle} />
            </Route>
            <Route path="/about" exact>
              <About pageTransition={pageTransition} pageVariants={pageVariants} style={pageStyle} />
            </Route>
            <Route path="/skills" exact>
              <Skills pageTransition={pageTransition} pageVariants={pageVariants} style={pageStyle} />
            </Route>
            <Route path="/projects" exact>
              <Projects pageTransition={pageTransition} pageVariants={pageVariants} style={pageStyle} />
            </Route>
            <Route path="/blog" exact>
              <Blog pageTransition={pageTransition} pageVariants={pageVariants} style={pageStyle} />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
