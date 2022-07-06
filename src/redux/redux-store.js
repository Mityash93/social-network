import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import authReducer from "./authReducer";
import messageReducer from "./messageReducer";
import navBarReducer from "./navBarReducer";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

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
