import { Dispatch } from "redux";
import { updateObjectInArray } from "../helpes/object-help";
import { UserType } from "../types/types";
import { usersAPI } from "./api/api";
import { AppStateType } from "./redux-store";
import { ThunkAction } from "redux-thunk";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totallUsersCount: 400,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>
}

export type initialStateType = typeof initialState

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
            }
        case SET_USERS: {
            return {
                ...state,
                users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
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
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
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

type ActionsTypes = followSuccessType | unfollowSuccessType | setUsersType | setCurrentPageType |
    setTotalUsersCountType | toggleIsFetchingType | toggleFollowingProgressType

type followSuccessType = {
    type: typeof FOLLOW
    userId: number
}
export const followSuccess = (userId: number): followSuccessType => ({ type: FOLLOW, userId })
type unfollowSuccessType = {
    type: typeof UNFOLLOW
    userId: number
}
export const unfollowSuccess = (userId: number): unfollowSuccessType => ({ type: UNFOLLOW, userId })
type setUsersType = {
    type: typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users: Array<UserType>): setUsersType => ({ type: SET_USERS, users })
type setCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    currentPage: number
}
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
type setTotalUsersCountType = {
    type: typeof SET_TOTAL_USERS_COUNT
    count: number
}
export const setTotalUsersCount = (totallUsersCount: number): setTotalUsersCountType => ({ type: SET_TOTAL_USERS_COUNT, count: totallUsersCount })
type toggleIsFetchingType = {
    type: typeof TOGGLE_IS_FETCHING
    isFetching: boolean
}
export const toggleIsFetching = (isFetching: boolean): toggleIsFetchingType => ({ type: TOGGLE_IS_FETCHING, isFetching })
type toggleFollowingProgressType = {
    type: typeof TOGGLE_IS_FOLLOWING_PROGRESS
    isFetching: boolean
    userId: number
}
export const toggleFollowingProgress = (isFetching: boolean, userId: number): toggleFollowingProgressType => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId
})


type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsTypes>

export const getUsers = (currentPage: number, pageSize: number): ThunkType => {
    return async (dispatch: DispatchType, getState: GetStateType) => {
        dispatch(toggleIsFetching(true));

        let data = await usersAPI.getUser(currentPage, pageSize)
        dispatch(setCurrentPage(currentPage));
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

const followUnfollowFlow = async (dispatch: DispatchType, userId: number, 
    apiMethod: any, actionCreator: (userId: number) => followSuccessType | unfollowSuccessType) => {
    dispatch(toggleFollowingProgress(true, userId));
    let Response = await apiMethod(userId);
    if (Response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId: number): ThunkType => {
    return async (dispatch) => {
        let apiMethod = usersAPI.follow.bind(usersAPI);
        let actionCreator = followSuccess;
        followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
    }
}
export const unfollow = (userId: number): ThunkType => {
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