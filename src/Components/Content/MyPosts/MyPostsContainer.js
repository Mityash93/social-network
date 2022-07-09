import { connect } from "react-redux";
import {
  addPostActionCreator,
  updateNewTextActionCreator,
} from "../../../redux/postsReducer.ts";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.PostsPage.Posts,
    NewPostText: state.PostsPage.NewPostText,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addPostActionCreator());
    },
    updateNewPostText: (text) => {
      dispatch(updateNewTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
