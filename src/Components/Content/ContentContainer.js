import React from "react";
import { connect } from "react-redux";
import Content from "./Content";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
} from "../../redux/postsReducer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class ContentContainer extends React.Component {
  refreshContent() {
    let userId = this.props.router.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshContent();
  }

  componentDidUpdate(prevProps) {
    if (this.props.router.params.userId !== prevProps.router.params.userId) {
      this.refreshContent();
    }
  }

  render() {
    return (
      <Content
        {...this.props}
        isOwner={!this.props.router.params.userId}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.PostsPage.profile,
    isAuth: state.auth.isAuth,
    status: state.PostsPage.status,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto,
  }),
  withRouter,
  withAuthRedirect
)(ContentContainer);
