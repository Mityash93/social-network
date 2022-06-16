import React from "react";
import {
  addPostActionCreator,
  updateNewTextActionCreator,
} from "../../../redux/postsReducer";
import MyPosts from "./MyPosts";

export default function MyPostsContainer(props) {
  const state = props.store.getState().PostsPage;

  const AddPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    props.store.dispatch(updateNewTextActionCreator(text));
  };

  return (
    <MyPosts
      updateNewPostText={onPostChange}
      onAddPost={AddPost}
      posts={state.Posts}
      NewPostText={state.NewPostText}
    />
  );
}
