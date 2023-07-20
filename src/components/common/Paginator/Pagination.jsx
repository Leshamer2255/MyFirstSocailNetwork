import React, { useState } from "react";
import styles from './Pagination.module.css'

let Pagination = ({totallUsersCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    let pagesCount = Math.ceil(totallUsersCount / pageSize);  
        
    let pages = [];
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i);

    }

    let summaryPages = Math.ceil(pagesCount / portionSize);  
    let [portionNumber, setPortionNumber] = useState(1);
    let leftSummaryPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightSummaryPageNumber = portionNumber * portionSize;


    return  <div className={styles.pagination}>
        {portionNumber > 1 &&
    <button onClick={() => {setPortionNumber(portionNumber - 1) }}>PREV</button> }
            {pages
            .filter (p => p >= leftSummaryPageNumber && p<= rightSummaryPageNumber)
            .map ( p => {
               return <div className={styles.pageNumber}><span key={p} 
               className={currentPage === p ? styles.selectedPage : ''}
               onClick={ (e) => { 
            onPageChanged(p);
                }}>{p}</span> 
                </div>
            })}
            {summaryPages > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>NEXT</button>}

            </div>
}
export default Pagination