import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  return (
    <div className={classes.item}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
          <hr />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>

      {props.Posts.map((post, index) => (
        <Post key={index} message={post.message} likesCount={post.likesCount} />
      ))}
    </div>
  );
}
