import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import authReducer from "./authReducer.ts";
import messageReducer from "./messageReducer.ts";
import navBarReducer from "./navBarReducer.ts";
import postsReducer from "./postsReducer.ts";
import usersReducer from "./usersReducer.ts";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer.ts";

const reducers = combineReducers({
  MessagePage: messageReducer,
  PostsPage: postsReducer,
  NavBar: navBarReducer,
  UsersPage: usersReducer,
  auth: authReducer,
  app: appReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)
  ));

window.store = store

export default store;
