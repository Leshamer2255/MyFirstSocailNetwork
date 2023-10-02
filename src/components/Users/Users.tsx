import React from "react";
import User from './User'
import Pagination from "../common/Paginator/Pagination.tsx";
import { UserType } from "../../types/types";

type PropsType = {
    totallUsersCount: number 
    pageSize: number 
    currentPage: number 
    onPageChanged: (pageNumber:number) => void   
    users: Array<UserType>
    followingInProgress: Array<number>
    unfollow:(userId:number) => void
    follow: (userId:number) => void
}

let Users: React.FC<PropsType> = ({currentPage, totallUsersCount, pageSize, onPageChanged, users, ...props}) => {

    return  <div>
    <Pagination currentPage={currentPage} onPageChanged={onPageChanged} 
    totallUsersCount={totallUsersCount} pageSize={pageSize}/>
        
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