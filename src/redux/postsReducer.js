const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const _setUserProfile = "SET-USER-PROFILE";

const initialState = {
  Posts: [
    { id: 1, message: "Hi progman", likesCount: 0 },
    { id: 2, message: "Hello marvelous", likesCount: 12 },
  ],
  NewPostText: "dima",
  profile: null,
}

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
        NewPostText: ""
      }
    case updateNewPostText:
      return {
        ...state,
        NewPostText: action.newText
      }
    case _setUserProfile:
      return {
        ...state,
        profile: action.profile
      }
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
  export const setUserProfile = (profile) => {
    return {
      type: _setUserProfile,
      profile
    };
  };

export default postsReducer;
