import { connect } from 'react-redux';
import { 
  uploadProfilePicture, 
  startListenPictureChange,
  startUpdateCurrentUser,
} from '../store/actions/userSession';
import EditProfile from './EditProfile';

const mapStateToProps = (state, ownProps) => {
  const { message } = state.uploadPictureProfileReducer
  // const { message } = state.listenPictureChangeReducer
  return {
    userServer: ownProps.userServer,
    setClose: ownProps.setClose,
    message: message,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  uploadProfilePicture: (uid, picture, fields, setFields) =>
    dispatch(uploadProfilePicture(uid, picture)(fields, setFields)),

  startListenPictureChange: (uid, fields, setFields) =>
    dispatch(startListenPictureChange(uid)(fields, setFields)),

  startUpdateCurrentUser: (uid, displayName, pictureURL) =>
    dispatch(startUpdateCurrentUser(uid)(displayName, pictureURL))

})

const EditProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditProfile)

export default EditProfileContainer