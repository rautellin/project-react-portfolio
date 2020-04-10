import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
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

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/skills" exact>
            <Skills />
          </Route>
          <Route path="/projects" exact>
            <Projects />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}
