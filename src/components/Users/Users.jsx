import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totallUsersCount /  props.pageSize);  
        
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);

    }
    
    return  <div>
        <div>
            {pages.map ( p => {
               return <span key={p} 
               className={props.currentPage === p ? styles.selectedPage : ''}
               onClick={ (e) => { 
            props.onPageChanged(p);
                }}>{p}</span> 
            })}
            </div>
        { 
            props.users.map (u => <div key={u.id}>
                <div className={styles.allusers}>  
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img alt="JONH" src={ u.photos.small != null ? u.photos.small: userPhoto } 
                        className={styles.userphoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button> }
                    </div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </div>
            </div>)
        }
    </div>
}
export default Users