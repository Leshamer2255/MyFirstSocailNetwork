import { sendMessageCreator, updateNewMessageTextCreator } from '../../Redux/Dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    isAuth: state.auth.isAuth
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
  const DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;