import React, { useEffect, useState } from "react";
import s from './ProfileInfo.module.css';


// let arr = [0, () => {}];
// let [a, setA] = arr;


const ProfileStatusWithHooks = (props) => {
    
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

useEffect( () => {
    setStatus(props.status);
}, [props.status]);



    const  activeEditMode = () => {
        setEditMode(true);
     }
    const deActiveEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return (
    <div className={s.status}>
        {! editMode && 
            <div>
                <span onDoubleClick={activeEditMode}>{props.status || "No status"}</span>
            </div>
        }
        { editMode &&
            <div>
                <input onChange={onStatusChange} onBlur={deActiveEditMode} autoFocus={true} value={status}/>
            </div>
        }
    </div>
        )
  }

export default ProfileStatusWithHooks;


















