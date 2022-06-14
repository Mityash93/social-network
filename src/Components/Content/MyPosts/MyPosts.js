import React from "react";
import {
  addPostActionCreator,
  updateNewTextActionCreator,
} from "../../../redux/state";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  const inputBox = React.createRef();
  const onButton = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    const text = inputBox.current.value;
    props.dispatch(updateNewTextActionCreator(text));
  };

  return (
    <div className={classes.item}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={inputBox}
            value={props.NewPostText}
          />
          <hr />
        </div>
        <div>
          <button onClick={onButton}>Add post</button>
        </div>
      </div>

      {props.Posts.map((post, index) => (
        <Post key={index} message={post.message} likesCount={post.likesCount} />
      ))}
    </div>
  );
}
