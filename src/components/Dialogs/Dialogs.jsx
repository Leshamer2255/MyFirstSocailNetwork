import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';

const Dialogs = (props) => {

// Methods massive map ////
    let dialogsElements= props.dialogsData
    .map(dialog => <DialogList name={dialog.name} id={dialog.id} />); 
    

    let messagesElements= props.messagesData
    .map(message => <Message message={message.message} />); 

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                { dialogsElements }
            </div>
            <div className={s.messages}>
               { messagesElements }
            </div>
        </div>
    )
}

export default Dialogs;