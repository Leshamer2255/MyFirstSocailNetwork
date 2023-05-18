import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogList from './DialogList/DialogList';
import Message from './Message/Message';

const Dialogs = (proms) => {

// Data ///////
    let dialogsData = [
        { id: 1, name: 'Anastasya' },
        { id: 2, name: 'Anton' },
        { id: 3, name: 'Xoma' },
        { id: 4, name: 'Dimas' },
        { id: 5, name: 'Colleague' }
    ]
    let messagesData = [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'What do you mean' },
        { id: 3, message: 'I can do it' },
        { id: 4, message: 'yo' },
        { id: 5, message: 'Yo' }
    ]
// Methods massive map ////
    let dialogsElements= dialogsData
    .map(dialog => <DialogList name={dialog.name} id={dialog.id} />); 
    

    let messagesElements= messagesData
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