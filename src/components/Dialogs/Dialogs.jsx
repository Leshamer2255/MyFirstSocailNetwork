import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

// Methods massive map ////
    let dialogsElements= props.state.dialogsData
    .map(dialog => <DialogList name={dialog.name} id={dialog.id} />); 
    

    let messagesElements= props.state.messagesData
    .map(message => <Message message={message.message} />); 

    let newPostElement = React.createRef();


  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
  }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               { messagesElements }
            </div>
            <textarea ref={newPostElement}></textarea>
            <button onClick={addPost}>ADD</button>
        </div>
    )
}

export default Dialogs;