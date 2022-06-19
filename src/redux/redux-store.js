import { combineReducers, legacy_createStore as createStore } from "redux";
import messageReducer from "./messageReducer";
import navBarReducer from "./navBarReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
  MessagePage: messageReducer,
  PostsPage: postsReducer,
  NavBar: navBarReducer,
  UsersPage: usersReducer,
});

const store = createStore(reducers);

window.store = store

export default store;
