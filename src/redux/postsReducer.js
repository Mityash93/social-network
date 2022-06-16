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
      state.Posts.push(newPost);
      state.NewPostText = "";
      return state;
    case updateNewPostText:
      state.NewPostText = action.newText;
      return state;
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
