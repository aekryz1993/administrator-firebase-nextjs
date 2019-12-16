import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { startFetchRequest } from "../../../store/actions/landingPage";
import Section1 from "./Section1";

const mapStateToProps = (state, ownProps) => {
  const {message} = state.editLandingPageReducer;
  return {
    message,
  }
}

const Sec1Container = connect(
  mapStateToProps,
)(reduxForm({
  form: 'editLandingPage',
  onSubmit: (values, dispatch) => dispatch(startFetchRequest(values.title))
})(Section1))

export default Sec1Container;