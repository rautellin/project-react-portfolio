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
import { faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp, faAngleDoubleRight, faHome, faHouseUser, faGlobe, faCode } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp, faAngleDoubleRight, faHome, faHouseUser, faGlobe, faCode)

const pageStyle = {
  position: 'relative'
}

const container = {
  initial: {
    opacity: 0,
    scale: 0.8
  },
  out: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    }
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const App = () => {

  const location = useLocation()

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname} style={pageStyle}>
            <Route path="/" exact>
              <About item={item} container={container} style={pageStyle} />
            </Route>
            <Route path="/about" exact>
              <About item={item} container={container} style={pageStyle} />
            </Route>
            <Route path="/skills" exact>
              <Skills item={item} container={container} style={pageStyle} />
            </Route>
            <Route path="/projects" exact>
              <Projects item={item} container={container} style={pageStyle} />
            </Route>
            <Route path="/blog" exact>
              <Blog item={item} container={container} style={pageStyle} />
            </Route>
          </Switch>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  )
}
