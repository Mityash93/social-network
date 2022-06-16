import messageReducer from "./messageReducer";
import navBarReducer from "./navBarReducer";
import postsReducer from "./postsReducer";


const store = {
  _state: {
    MessagePage: {
      Dialogs: [
        { id: "1", name: "Denis" },
        { id: "2", name: "Irina" },
        { id: "3", name: "Dima" },
        { id: "4", name: "Kamilla" },
      ],
      Messages: [
        { id: 1, message: "How are u?" },
        { id: 2, message: "What is happen?" },
        { id: 3, message: "How are u?" },
      ],
      newMessageBody: "",
    },
    PostsPage: {
      Posts: [
        { id: 1, message: "Hi progman", likesCount: 0 },
        { id: 2, message: "Hello marvelous", likesCount: 12 },
      ],
      NewPostText: "dima",
    },
    NavBar: {
      // FriendsAvas: [],
      // FriendsNames: ["Камилла", "Денис"],
    },
  },
  _callSubscriber() {},

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._state._callSubscriber = observer;
  },
  // friend: this._state.NavBar.FriendsAvas.push(
  //   "https://sun9-62.userapi.com/s/v1/if2/kJy5MlQUNHa3qSKzvdmoLVornZY6mMenhPU5l3qBGAQcElxgt4zoFbkX5rcqfwHNOEDJBZmbga_4EqeQeWtBo4o0.jpg?size=1623x2160&quality=95&type=album",
  //   "https://sun9-70.userapi.com/s/v1/if1/DsTwMZyt_QiogWfim4WOhvkmzhgwxLceTEu8nmZhehJm9o82o5O0xCaT_TLK7bMbM3iS0cKR.jpg?size=1440x2160&quality=96&type=album"
  // ),

  // addPost() {
  //   const newPost = {
  //     id: 3,
  //     message: this._state.PostsPage.NewPostText,
  //     likesCount: 0,
  //   };
  //   this._state.PostsPage.Posts.push(newPost);
  //   this._state.PostsPage.NewPostText = "";
  //   this._state._callSubscriber(this._state);
  // },
  // updateNewPostText(newText) {
  //   this._state.PostsPage.NewPostText = newText;
  //   this._state._callSubscriber(this._state);
  // },
  dispatch(action) {
    
    this._state.PostsPage = postsReducer(this._state.PostsPage, action);
    this._state.MessagePage = messageReducer(this._state.MessagePage, action);
    this._state.NavBar = navBarReducer(this._state.NavBar, action);

    this._state._callSubscriber(this._state);
  },
};




export default store;
