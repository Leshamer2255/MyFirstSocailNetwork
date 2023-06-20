const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
        
let initialState = {
    users:[],
    pageSize: 4,
    totallUsersCount: 40,
    currentPage: 1,
    isFetching: false
    
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
                users: action.users 
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        // case SET_TOTAL_USERS_COUNT:{
        //     return {
        //         ...state,
        //         totallUsersCount: action.count 
                
        //     }
        // }
        case TOGGLE_IS_FETCHING:{
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totallUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totallUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

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