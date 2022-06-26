import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
import userPhoto from "../../assets/images/user.jpeg";
import classes from "./Users.module.css";

export default function Users(props) {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div className={classes.pageNumber}>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page ? classes.selectedPage : ""}
              onClick={(event) => {
                props.onPageChaned(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <NavLink as={Link} to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small === null ? userPhoto : user.photos.small
                  }
                  className={classes.userPhoto}
                  alt=""
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  disabled={props.followingInProgress.some(
                    (id) => id === user.id
                  )}
                  onClick={() => {
                    props.follow(user.id);
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
      ))}
    </div>
  );
}
