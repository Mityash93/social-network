// import React from "react";
// import { connect } from "react-redux";
// import { compose } from "redux";
// import { logout } from "../../redux/authReducer.ts";
// import Header from "./Header";

// class HeaderContainer extends React.Component {

//   render() {
//     return <Header {...this.props} />;
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     isAuth: state.auth.isAuth,
//     login: state.auth.login,
//   };
// };

// export default compose(
//   connect(mapStateToProps, { logout }),
// )(HeaderContainer)