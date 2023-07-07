import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';
import React from 'react';
import {Navigate} from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

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


  if (!props.isAuth)  return <Navigate to={"/login"} />; 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               <div>{ messagesElements }</div>
               <AddMessageFormRedux />
            </div> 
            
        </div>
    )
}

const AddMessageForm = (props) => {
  return (
  <form onSubmit={props.handleSubmit}>
    <div><Field  component='textarea' name='newMessageText' placeholder='Enter your message' /></div>
        <div><button>SEND</button></div>
  </form>
  )
}


const AddMessageFormRedux = reduxForm ({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;