import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContentContainer from "./Components/Content/ContentContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Routes>
            <Route exact path="/profile" element={<ContentContainer />} />
            <Route
              exact
              path="/profile/:userId"
              element={<ContentContainer store={props.store} />}
            />
            <Route
              exact
              path="/messages/*"
              element={<DialogsContainer store={props.store} />}
            />
            <Route exact path="/users/*" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
