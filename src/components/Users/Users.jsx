import React from "react";
import User from './User'
import Pagination from "../common/Paginator/Pagination";

let Users = ({currentPage, totallUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return  <div>
    <Pagination currentPage={currentPage} onPageChanged={onPageChanged} totallUsersCount={totallUsersCount} pageSize={pageSize}/>
        
        <div>
        { 
            users.map (u => <User user={u} 
            followingInProgress={props.followingInProgress} 
            key={u.id} unfollow={props.unfollow} follow={props.follow}/> 
            )
        }
        </div>
    </div>
}

export default Users