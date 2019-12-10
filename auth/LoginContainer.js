import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import Login from "./Login";
import { loginRequest, loginRequestEnded } from '../store/actions/auth';

const mapStateToProps = (state, ownProps) => {
  const {message, redirect} = state.loginReducer;
  return {
    message,
    redirect
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginRequestEnded: () => dispatch(loginRequestEnded()),
  loginRequest: (email, password) => dispatch(loginRequest(email, password)),
})

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({
  form: 'login',
  onSubmit: (values, dispatch) => dispatch(loginRequest(values.email, values.password))
})(Login))

export default LoginContainer;