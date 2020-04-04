import React from 'react'
import { Header } from './components/Header'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faChevronCircleDown, faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faChevronCircleDown, faAngleDown)

export const App = () => {
  return (
    <>
      <Header />
    </>
  )
}
