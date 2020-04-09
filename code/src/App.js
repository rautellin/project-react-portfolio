import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Navbar } from './components/Navbar'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Footer } from './components/Footer'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp, faHome, faHouseUser } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faEnvelope, faEnvelopeOpen, faAngleDown, faAngleUp, faAngleDoubleUp, faHome, faHouseUser)

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
          <Route path="/projects" exact>
            <Projects />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  )
}
