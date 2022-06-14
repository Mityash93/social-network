const addPost = "ADD-POST";
const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const updateNewMessageBody = "UPDATE-NEW-MESSAGE-BODY";
const sendMessage = "SEND-MESSAGE";

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
    // NavBar: {
    //   FriendsAvas: [],
    //   FriendsNames: ["Камилла", "Денис"],
    // },
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
    // type: 'ADD-MESSAFE' for example

    if (action.type === "ADD-POST") {
      const newPost = {
        id: 3,
        message: this._state.PostsPage.NewPostText,
        likesCount: 0,
      };
      this._state.PostsPage.Posts.push(newPost);
      this._state.PostsPage.NewPostText = "";
      this._state._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.PostsPage.NewPostText = action.newText;
      this._state._callSubscriber(this._state);
    } else if (action.type === updateNewMessageBody) {
      this._state.MessagePage.newMessageBody = action.body;
      this._state._callSubscriber(this._state);
    } else if (action.type === sendMessage) {
      const body = this._state.MessagePage.newMessageBody;
      this._state.MessagePage.Messages.push({ id: 4, message: body });
      this._state.MessagePage.newMessageBody = "";
      this._state._callSubscriber(this._state);
    }
  },
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
export const sendMessageCreator = () => {
  return {
    type: sendMessage,
  };
};
export const updateNewMessageBodyCreator = (body) => {
  return {
    type: updateNewMessageBody,
    body: body,
  };
};

export default store;
