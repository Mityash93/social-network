import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Preloader from "./Components/common/preloader/Preloader";
import ContentContainer from "./Components/Content/ContentContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import UsersContainer from "./Components/Users/UsersContainer";
import { initializeApp } from "./redux/appReducer";

class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
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
                element={<ContentContainer />}
              />
              <Route exact path="/messages/*" element={<DialogsContainer />} />
              <Route exact path="/users/*" element={<UsersContainer />} />
              <Route exact path="/login/*" element={<Login />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

export default connect(mapStateToProps, { initializeApp })(App);
