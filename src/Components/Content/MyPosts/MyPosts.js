import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

export default function MyPosts(props) {
  const newPostElement = React.createRef();
  const AddPost = () => {
    props.onAddPost();
  };

  const onPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.item}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.NewPostText}
          />
          <hr />
        </div>
        <div>
          <button onClick={AddPost}>Add post</button>
        </div>
      </div>

      {props.posts.map((post, index) => (
        <Post key={index} message={post.message} likesCount={post.likesCount} />
      ))}
    </div>
  );
}
