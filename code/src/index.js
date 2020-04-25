import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { App } from './App'
import data from './data/data'

ReactDOM.render(<BrowserRouter ><App /></BrowserRouter>, document.getElementById('root'))

// SELECT NAV

const menuBtn = document.querySelector('.menu-btn')
const menu = document.querySelector('.menu')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.nav-item')
const iconItems = document.querySelectorAll('.icon-item')

// INITIAL STATE

let showMenu = false

let toggleMenu = () => {
  if (!showMenu) {
    menuBtn.classList.add('close')
    menu.classList.add('show')
    menuNav.classList.add('show')
    navItems.forEach(item => item.classList.add('show'))
    showMenu = true
  } else {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))
    showMenu = false
  }
}

let closeMenu = () => {
  if (showMenu) {
    menuBtn.classList.remove('close')
    menu.classList.remove('show')
    menuNav.classList.remove('show')
    navItems.forEach(item => item.classList.remove('show'))
    showMenu = false
  } else {
    return
  }
}

menuBtn.addEventListener('click', toggleMenu)


navItems.forEach(item => {
  item.addEventListener('click', closeMenu)
});

iconItems.forEach(item => {
  item.addEventListener('click', closeMenu)
});




