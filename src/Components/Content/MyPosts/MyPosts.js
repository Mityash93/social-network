import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";

export default function MyPosts() {
  return (
    <di className={classes.item}>
      <div>My posts</div>
      <div>
          <textarea></textarea>
          <button>Add post</button>
      </div>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
    </di>
  );
}
