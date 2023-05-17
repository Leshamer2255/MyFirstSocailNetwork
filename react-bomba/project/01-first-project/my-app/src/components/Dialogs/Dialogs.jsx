import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const DialogList = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={s.dialog}>{props.message}</div>
}

const Dialogs = (proms) => {


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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsList}>
                <DialogList name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogList name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}

export default Dialogs;