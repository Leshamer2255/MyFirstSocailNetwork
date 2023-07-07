
import { compose } from 'redux';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../Redux/Dialogs-reducer';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (body) => {
      dispatch(updateNewMessageTextCreator(body));
    }, 
    sendMessage: () => {
      dispatch(sendMessageCreator());
     }
  }
}

export default compose (
  connect (mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  )(Dialogs);