const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";

const initialState = {
  Posts: [
    { id: 1, message: "Hi progman", likesCount: 0 },
    { id: 2, message: "Hello marvelous", likesCount: 12 },
  ],
  NewPostText: "dima",
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

export default postsReducer;
