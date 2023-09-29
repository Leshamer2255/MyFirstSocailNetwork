
import { compose } from 'redux';
import { sendMessageCreator } from '../../Redux/Dialogs-reducer.ts';
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
    sendMessage: (newMessageText) => {
      dispatch(sendMessageCreator(newMessageText));
     }
  }
}

export default compose (
  connect (mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  )(Dialogs);