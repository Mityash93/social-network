import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Header.module.css'

export default function Header(props) {
  return (
    <header className={classes.Header}>
      <img src='https://free-png.ru/wp-content/uploads/2020/04/VK_Blue_Logo_t.png' alt=''/>

      <div className={classes.loginBlock}>
       { props.isAuth ? props.login 
        : <NavLink as={Link} to={'/login/'} >Login</NavLink> } 
      </div>
    </header>
  )
}
