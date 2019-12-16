import { connect } from 'react-redux';
import {
  uploadProfilePicture,
  startListenPictureChange,
  startUpdateCurrentUser,
  startFetchCurrentUser,
} from '../store/actions/userSession';
import EditProfile from './EditProfile';

const mapStateToProps = (state, ownProps) => {
  const { message } = state.uploadPictureProfileReducer
  return {
    userServer: ownProps.userServer,
    setClose: ownProps.setClose,
    message: message,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadProfilePicture: (uid, picture, fields, setFields) =>
    dispatch(uploadProfilePicture(uid, picture)(fields, setFields)),

  startListenPictureChange: (uid, fields, setFields, setPictureURL) =>
    dispatch(startListenPictureChange(uid)(fields, setFields, setPictureURL)),

  startUpdateCurrentUser: (uid, displayName, pictureURL) =>
    dispatch(startUpdateCurrentUser(uid)(displayName, pictureURL)),

})

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile)

export default EditProfileContainer