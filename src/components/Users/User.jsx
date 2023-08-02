import React from "react";
import styles from './Users.module.css'
import userPhoto from '../../assets/images/user.png';
import { NavLink } from "react-router-dom";

let Users = ({user, followingInProgress, unfollow, follow}) => {
        return <div>
                <div className={styles.allusers}>  
                    <div>
                        <NavLink to={'./../profile/' + user.id}>
                        <img alt="JONH" src={ user.photos.small != null ? user.photos.small : userPhoto } 
                        className={styles.userphoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {user.followed 
                        ? <button disabled={followingInProgress.some( id => id === user.id)} 
                        onClick={() => {unfollow(user.id);
                            }}>Unfollow</button> 
                        : <button disabled={followingInProgress.some( id => id === user.id)} 
                        onClick={() => {follow(user.id);
                            }}>Follow</button> }
                    </div>
                    <div className={styles.name}>{user.name}</div>
                    <div>{user.status}</div>
                    <div>{user.id}</div>
                    <div></div>
                </div>
            </div>
        }
export default Users