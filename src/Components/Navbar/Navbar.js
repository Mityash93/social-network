import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={classes.Navbar}>
      <div className={classes.item}>
          <NavLink as={Link} to='/' className = { handlerActive => handlerActive.isActive ? classes.active : classes.item }>Profile</NavLink>
      </div>

      <div className={classes.item}>
          <NavLink as={Link} to='/messages' className = { handlerActive => handlerActive.isActive ? classes.active : classes.item }>Messages</NavLink>
      </div>

      <div className={classes.item}>
          <NavLink as={Link} to='/news' className = { handlerActive => handlerActive.isActive ? classes.active : classes.item }>News</NavLink>
      </div>

      <div className={classes.item}>
          <NavLink as={Link} to='/music' className = { handlerActive => handlerActive.isActive ? classes.active : classes.item }>Music</NavLink>
      </div>

      <div className={classes.item}>
          <NavLink as={Link} to='/settings' className = { handlerActive => handlerActive.isActive ? classes.active : classes.item }>Settings</NavLink>
      </div>
    </nav>
  )
}
