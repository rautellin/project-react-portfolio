import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.nav-links')

hamburger.addEventListener('mousedown', (event) => {
  event.preventDefault()
  navlinks.classList.toggle('open')
}, { passive: false })

hamburger.addEventListener('touchstart', (event) => {
  event.preventDefault()
  navlinks.classList.toggle('open')
}, { passive: false })

hamburger.addEventListener('touchend', (event) => {
  event.preventDefault()
}, { passive: false })



