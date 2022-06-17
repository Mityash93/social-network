import { combineReducers, legacy_createStore as createStore } from "redux";
import messageReducer from "./messageReducer";
import navBarReducer from "./navBarReducer";
import postsReducer from "./postsReducer";

const reducers = combineReducers({
  MessagePage: messageReducer,
  PostsPage: postsReducer,
  NavBar: navBarReducer,
});

const store = createStore(reducers);

window.store = store

export default store;
