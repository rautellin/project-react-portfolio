import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App'

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))


// SELECT NAV

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const menuBranding = document.querySelector('.menu-branding')
const navItems = document.querySelectorAll('.nav-item')

// INITIAL STATE

let showMenu = false

let toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    menuBranding.classList.add('show')
    navItems.forEach(item => item.classList.add('show'))
    showMenu = true
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    menuBranding.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))
    showMenu = false
  }
}

menuBtn.addEventListener('click', toggleMenu)


// const hamburger = document.querySelector('.hamburger')
// const navlinks = document.querySelector('.nav-links')

// hamburger.addEventListener('mousedown', (event) => {
//   event.preventDefault()
//   navlinks.classList.toggle('open')
// }, { passive: false })

// hamburger.addEventListener('touchstart', (event) => {
//   event.preventDefault()
//   navlinks.classList.toggle('open')
// }, { passive: false })

// hamburger.addEventListener('touchend', (event) => {
//   event.preventDefault()
// }, { passive: false })



