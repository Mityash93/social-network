import React, { Component } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import "antd/dist/antd.css";
import Preloader from "./Components/common/preloader/Preloader";
import ContentContainer from "./Components/Content/ContentContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import { Login } from "./Components/Login/Login";
import { UsersPage } from "./Components/Users/UsersPage";
import { initializeApp } from "./redux/appReducer.ts";
import { Layout, Menu } from "antd";
import Header from "./Components/Header/Header";

const { Content, Footer, Sider } = Layout;

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
        <Layout>
          <Header />
          <Content style={{ padding: "0 50px" }}>
            <Layout
              className="site-layout-background"
              style={{ padding: "24px 0" }}
            >
              <Sider className="site-layout-background" width={200}>
                <Menu mode="inline" style={{ height: "100%" }}>
                  <Menu.Item key="1">
                    {" "}
                    <Link to="/profile">Profile</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    {" "}
                    <Link to="/messages/*">Messages</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/users/*">Users</Link>
                  </Menu.Item>
                </Menu>
              </Sider>
              <Content style={{ padding: "0 24px", minHeight: 280 }}>
                <Routes>
                  <Route exact path="/profile" element={<ContentContainer />} />
                  <Route
                    exact
                    path="/profile/:userId"
                    element={<ContentContainer />}
                  />
                  <Route
                    exact
                    path="/messages/*"
                    element={<DialogsContainer />}
                  />
                  <Route exact path="/users/*" element={<UsersPage />} />
                  <Route exact path="/login/*" element={<Login />} />
                </Routes>
              </Content>
            </Layout>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Social Network ©2022 Created by Mityash
          </Footer>
        </Layout>
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

// {
//   /* <div className="app-wrapper">
// <HeaderContainer />
// <Navbar />
// <div className="app-wrapper-content">
//   <Routes>
//     <Route exact path="/profile" element={<ContentContainer />} />
//     <Route
//       exact
//       path="/profile/:userId"
//       element={<ContentContainer />}
//     />
//     <Route exact path="/messages/*" element={<DialogsContainer />} />
//     <Route exact path="/users/*" element={<UsersPage />} />
//     <Route exact path="/login/*" element={<Login />} />
//   </Routes>
// </div>
// </div> */
// }
