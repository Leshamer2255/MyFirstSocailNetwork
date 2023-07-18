import React from "react";
import styles from './Pagination.module.css'

let Pagination = ({totallUsersCount, pageSize, currentPage, onPageChanged }) => {

    let pagesCount = Math.ceil(totallUsersCount / pageSize);  
        
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);

    }

    return  <div>
            {pages.map ( p => {
               return <span key={p} 
               className={currentPage === p ? styles.selectedPage : ''}
               onClick={ (e) => { 
            onPageChanged(p);
                }}>{p}</span> 
            })}
            </div>
}
export default Pagination