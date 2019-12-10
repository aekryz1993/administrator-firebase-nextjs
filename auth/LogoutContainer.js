import { connect } from 'react-redux';
import Logout from "./Logout";
import { logoutRequest, loginRequest, logoutRequestEnded } from '../store/actions/auth';

const mapStateToProps = (state, ownProps) => {
  const {message, redirect} = state.logoutReducer;
  return {
    message,
    redirect
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutRequest: () => dispatch(logoutRequest()),
  loginRequest: () => dispatch(loginRequest()),
  logoutRequestEnded: () => dispatch(logoutRequestEnded())
})

const LogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Logout)

export default LogoutContainer;