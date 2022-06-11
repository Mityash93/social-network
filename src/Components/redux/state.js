const state = {
  MessagePage: {
    Dialogs: [
      { id: "1", name: "Denis" },
      { id: "2", name: "Irina" },
      { id: "3", name: "Dima" },
      { id: "4", name: "Kamilla" },
    ],
    Messages: [
      { message: "How are u?" },
      { message: "What is happen?" },
      { message: "How are u?" },
    ],
  },
  PostsPage: {
    Posts: [
      { id: 1, message: "Hi progman", likesCount: 0 },
      { id: 2, message: "Hello marvelous", likesCount: 12 },
    ],
  },
  NavBar: {
    FriendsAvas: [],
    FriendsNames: ["Камилла", "Денис"],
  },
};

state.NavBar.FriendsAvas.push(
  "https://sun9-62.userapi.com/s/v1/if2/kJy5MlQUNHa3qSKzvdmoLVornZY6mMenhPU5l3qBGAQcElxgt4zoFbkX5rcqfwHNOEDJBZmbga_4EqeQeWtBo4o0.jpg?size=1623x2160&quality=95&type=album",
  "https://sun9-70.userapi.com/s/v1/if1/DsTwMZyt_QiogWfim4WOhvkmzhgwxLceTEu8nmZhehJm9o82o5O0xCaT_TLK7bMbM3iS0cKR.jpg?size=1440x2160&quality=96&type=album"
);

export default state;
