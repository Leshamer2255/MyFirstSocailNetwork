import React from "react";
import styles from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
    props.setUsers (
        [    
        { id: 1, 
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/John_Wick_4_poster.jpg/200px-John_Wick_4_poster.jpg', 
        followed: true, 
        fullName: 'Lesha M', 
        status: 'I`m creat this website', 
        location: {city:'Kiev', country:'Ukraine'} 
    },
        { id: 2, 
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/John_Wick_4_poster.jpg/200px-John_Wick_4_poster.jpg', 
        followed: true, 
        fullName: 'Nastya B', 
        status: 'I`m looking for my husband', 
        location: {city:'Kiev', country:'Ukraine'} 
    },
        { id: 3, 
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/John_Wick_4_poster.jpg/200px-John_Wick_4_poster.jpg', 
        followed: true, 
        fullName: 'Artem M', 
        status: 'I`m want to open my coffee bar', 
        location: {city:'Kiev', country:'Ukraine'} 
    },
        { id: 4, 
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/John_Wick_4_poster.jpg/200px-John_Wick_4_poster.jpg', 
        followed: true, 
        fullName: 'Anton L', 
        status: 'I`m living in Poland now', 
        location: {city:'Warshava', country:'Poland'} 
    },
        { id: 5, 
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/John_Wick_4_poster.jpg/200px-John_Wick_4_poster.jpg', 
        followed: true, 
        fullName: 'Kolya X', 
        status: 'I`m searching a very beatufil girl', 
        location: {city:'Kiev', country:'Ukraine'} 
    },
        { id: 6, 
        photoUrl: 'https://upload.wikimedia.org/wikipedia/ru/thumb/3/3b/John_Wick_4_poster.jpg/200px-John_Wick_4_poster.jpg', 
        followed: true, 
        fullName: 'Nadia B', 
        status: 'I`m a mother', 
        location: {city:'Kiev', country:'Ukraine'} 
    },
            ]
        )
    }

    return <div>
        {
            props.users.map (u => <div key={u.id}>
                <span>
                    <div>
                        <img alt="JONH" src={u.photoUrl} className={styles.userphoto}/>
                    </div>
                    <div>
                        {u.followed 
                        ? <button onClick={() => { props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => { props.follow(u.id)}}>Follow</button> }
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users; 