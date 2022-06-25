import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export default function Navbar(props) {
  const onNavLink = (url, item) => (
    <NavLink
      as={Link}
      to={url}
      className={(handlerActive) =>
        handlerActive.isActive ? classes.active : classes.item
      }
    >
      {item}
    </NavLink>
  );

  return (
    <nav className={classes.Navbar}>
      <div className={classes.item}>{onNavLink("profile", "Profile")}</div>

      <div className={classes.item}>{onNavLink("messages", "Messages")}</div>

      <div className={classes.item}>{onNavLink("users", "Users")}</div>

      <div className={classes.item}>{onNavLink("news", "News")}</div>

      <div className={classes.item}>{onNavLink("music", "Music")}</div>

      <div className={classes.item}>{onNavLink("settings", "Settings")}</div>

      {/* <div>
        <h3 style={{textAlign: 'center'}}>Friends</h3>
        <div className={classes.friends}>
          <div style={{textAlign: 'center'}}>
            {props.avas.map((ava, index) => <img key={index}
            style={{width: 50, height: 50, borderRadius: 50, marginRight: 10}}
            src={ava} alt=''/>)}
            {props.names.map(name => name)}
          </div>

          {/* <div style={{textAlign: 'center'}}>
            <img src='https://sun9-70.userapi.com/s/v1/if1/DsTwMZyt_QiogWfim4WOhvkmzhgwxLceTEu8nmZhehJm9o82o5O0xCaT_TLK7bMbM3iS0cKR.jpg?size=1440x2160&quality=96&type=album' alt=''/>
            Денис */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </nav>
  );
}
