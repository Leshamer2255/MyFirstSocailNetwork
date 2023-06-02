import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';
import React from 'react';
import { sendMessageCreator, updateNewMessageTextCreator } from '../../Redux/Dialogs-reducer';

const Dialogs = (props) => {
  debugger;
  let state = props.store.getState().messagesPage;

// Methods massive map ////
    let dialogsElements= state.dialogsData.map(dialog => <DialogList name={dialog.name} id={dialog.id} />); 
    let messagesElements= state.messagesData.map(message => <Message message={message.message} />);
    let newMessageText= state.newMessageText;



  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageTextCreator(body));
  }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               <div>{ messagesElements }</div>
               <div>
                  <div><textarea value={newMessageText} onChange={onNewMessageChange} placeholder='Enter your message'></textarea></div>
                  <div><button onClick={onSendMessageClick}>SEND</button></div>
               </div>
            </div> 
        </div>
    )
}

export default Dialogs;