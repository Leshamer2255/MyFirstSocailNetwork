import { updateObjectInArray } from "../helpes/object-help";
import { usersAPI } from "./api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
        
let initialState = {
    users:[],
    pageSize: 10,
    totallUsersCount: 400,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
    
}
 
const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users,action.userId,"id", {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state, 
                users: updateObjectInArray(state.users,action.userId,"id", {followed: false})
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:{
            return {
                ...state,
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.userId]
                : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totallUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totallUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
    dispatch(toggleIsFetching(true));

    let data = await usersAPI.getUser(currentPage, pageSize)
            dispatch(setCurrentPage(currentPage));
            dispatch(toggleIsFetching(false));
            dispatch(setUsers (data.items));
            dispatch(setTotalUsersCount(data.totalCount));
}
}

const followUnfollowFlow =  async (dispatch, userId, apiMethod, actionCreator) => {
        dispatch(toggleFollowingProgress(true, userId));
            let Response = await apiMethod(userId);
                if (Response.data.resultCode === 0) {
                dispatch(actionCreator(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
}

export const follow  = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
        }
}
export const unfollow  = (userId) => {
    return async (dispatch) => {
        let apiMethod = usersAPI.unfollow.bind(usersAPI);
        let actionCreator = unfollowSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
        }
}
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