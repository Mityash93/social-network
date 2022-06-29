import { contentAPI, usersAPI } from "../api/api";

const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const _setUserProfile = "SET-USER-PROFILE";
const _setStatus = "SET-STATUS";

const initialState = {
  Posts: [
    { id: 1, message: "Hi progman", likesCount: 0 },
    { id: 2, message: "Hello marvelous", likesCount: 12 },
  ],
  NewPostText: "dima",
  profile: null,
  status: "",
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case addPost:
      const newPost = {
        id: 3,
        message: state.NewPostText,
        likesCount: 0,
      };
      return {
        ...state,
        Posts: [...state.Posts, newPost],
        NewPostText: "",
      };
    case updateNewPostText:
      return {
        ...state,
        NewPostText: action.newText,
      };
    case _setUserProfile:
      return {
        ...state,
        profile: action.profile,
      };
    case _setStatus:
      return {
        ...state,
        status: action.status,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {
    type: addPost,
  };
};
export const updateNewTextActionCreator = (text) => {
  return {
    type: updateNewPostText,
    newText: text,
  };
};
const setUserProfile = (profile) => {
  return {
    type: _setUserProfile,
    profile,
  };
};
const setStatus = (status) => {
  return {
    type: _setStatus,
    status,
  };
};
export const getUserProfile = (userId) => (dispatch) => {
  return usersAPI.getContent(userId).then((response) => {
    dispatch(setUserProfile(response.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  return contentAPI.getStatus(userId).then((response) => {
    dispatch(setStatus(response.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  return contentAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};

export default postsReducer;
