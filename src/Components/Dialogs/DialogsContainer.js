import { connect } from "react-redux";
import { compose } from "redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import { sendMessageCreator } from "../../redux/messageReducer.ts";
import Dialogs from "./Dialogs";

const mapStateToProps = (state) => {
  return {
    MessagePage: state.MessagePage,
    isAuth: state.auth.isAuth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessageCreator: (message) => {
      dispatch(sendMessageCreator(message));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
