const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
        
let initialState = {
    users:[]    
    
}
 
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map ( u => { 
                    if(u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u; 
                })
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map ( u => { 
                    if(u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u; 
                })
            }
        case SET_USERS:{
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (users) => ({type: SET_USERS, users})

export default usersReducer;














// let a = {    
//   name:'pikatchu',
//   protocol: 'htpps',
//   maxStudentCount: 10,
//   isOnline: true,
//   students: ['van', 'drey', 'arid'],
//   classroom: {
//     teacher:{
//       name:'Lesha',
//       age:23  
//     }
//   }
// }

// let b = {...a};
// b.classroom = {...a.classroom};
// b.classroom.teacher = {...a.classroom.teacher};
// b.students = [...a.students];

// b.classroom.teacher.name = 'Ant0n';

// console.log(b.classroom.teacher.name)