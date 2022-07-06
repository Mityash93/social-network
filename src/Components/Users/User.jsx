import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.jpeg";

export default function User({ user, followingInProgress, unfollow, follow }) {
  return (
    <div key={user.id}>
      <span>
        <div>
          <NavLink as={Link} to={"/profile/" + user.id}>
            <img
              src={user.photos.small === null ? userPhoto : user.photos.small}
              className={classes.userPhoto}
              alt=""
            />
          </NavLink>
        </div>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </span>
      <span>
        <span>
          <div>{user.name}</div>
          <div>{user.status}</div>
        </span>
        <span>
          <div>{"user.location.country"}</div>
          <div>{"user.location.city"}</div>
        </span>
      </span>
    </div>
  );
}
