import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

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



