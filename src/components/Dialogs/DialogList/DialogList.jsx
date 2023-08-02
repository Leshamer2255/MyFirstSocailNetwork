import { NavLink, Route, Routes } from 'react-router-dom';
import s from './../Dialogs.module.css'



const DialogList = (props) => {
    let path = '/dialogs/' + props.id;
    return <div className={s.item + ' ' + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

export default DialogList;