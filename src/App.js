import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar
        // avas={props.state.NavBar.FriendsAvas}
        // names={props.state.NavBar.FriendsNames}
        />
        <div className="app-wrapper-content">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Content
                  Posts={props.state.PostsPage.Posts}
                  NewPostText={props.state.PostsPage.NewPostText}
                  dispatch={props.dispatch}
                />
              }
            />
            <Route
              exact
              path="/messages/*"
              element={
                <Dialogs store={props.store} dispatch={props.dispatch} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
