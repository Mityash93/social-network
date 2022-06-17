import React from "react";
import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewTextActionCreator,
} from "../../../redux/postsReducer";
import MyPosts from "./MyPosts";

// export default function MyPostsContainer(props) {
//   const state = props.store.getState().PostsPage; 

//   const AddPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   };

//   const onPostChange = (text) => {
//     props.store.dispatch(updateNewTextActionCreator(text));
//   };

//   return (
//     <MyPosts
//       updateNewPostText={onPostChange}
//       onAddPost={AddPost}
//       posts={state.Posts}
//       NewPostText={state.NewPostText}
//     />
//   );
// }

const mapStateToProps = (state) => {
  return {
    posts: state.PostsPage.Posts,
    NewPostText: state.PostsPage.NewPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text) => {
      dispatch(updateNewTextActionCreator(text))
    } 
  }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer
