import React from 'react'
import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <div>
          <a href='/'>Profile</a>
      </div>

      <div>
          <a href='/'>Massages</a>
      </div>

      <div>
          <a href='/'>News</a>
      </div>

      <div>
          <a href='/'>Music</a>
      </div>

      <div>
          <a href='/'>Settings</a>
      </div>
    </nav>
  )
}
