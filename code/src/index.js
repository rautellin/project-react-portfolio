import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<App />, document.getElementById('root'))

const hamburger = document.querySelector('.hamburger')
const navlinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')

hamburger.addEventListener('click', () => {
  navlinks.classList.toggle('open')
})


