import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../Redux/Dialogs-reducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  let state = props.store.getState().messagesPage;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageTextCreator(body));
  }

    return (<Dialogs updateNewMessageText = {onNewMessageChange} sendMessage = {onSendMessageClick}
      messagesPage= {state}/> )
}

export default DialogsContainer;