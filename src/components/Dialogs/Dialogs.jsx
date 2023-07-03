import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {
  let state = props.messagesPage;

// Methods massive map ////
    let dialogsElements= state.dialogsData.map(dialog => <DialogList name={dialog.name} key={dialog.id} id={dialog.id} />); 
    let messagesElements= state.messagesData.map(message => <Message message={message.message} key={message.id} />);
    let newMessageText= state.newMessageText;

  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageText(body);
  }


  alert(props.isAuth); 

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