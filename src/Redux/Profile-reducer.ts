import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "./api/api";
import { PhotosType, PostType, ProfileType } from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    posts: [
        { id: 1, message: 'Hi, Barbi', likesCount: 12 },
        { id: 2, message: 'It`s my first post', likesCount: 11 },
        { id: 3, message: 'What are you talking about', likesCount: 13 },
        { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
        { id: 5, message: 'Fight', likesCount: 111 }
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
};


export type initialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): initialStateType => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            };
        }
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            };
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos } as ProfileType
            };
        }

        default:
            return state;
    }
}

type addPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText: string 
}
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => ({ type: ADD_POST, newPostText })
type setUserProfileType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType 
}
export const setUserProfile = (profile: ProfileType): setUserProfileType => ({ type: SET_USER_PROFILE, profile })
type setStatusType = {
    type: typeof SET_STATUS
    status: string 
}
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status })
type deletePostType = {
    type: typeof DELETE_POST
    postId: number 
}
export const deletePost = (postId:number): deletePostType => ({ type: DELETE_POST, postId })
type savePhotoSuccessType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: Array<PhotosType> 
}
export const savePhotoSuccess = (photos: Array<PhotosType>): savePhotoSuccessType => ({ type: SAVE_PHOTO_SUCCESS, photos })

export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let Response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(Response.data));
}

export const getStatus = (userId:number) => async (dispatch:any) => {
    let Response = await profileAPI.getStatus(userId)
    dispatch(setStatus(Response.data));

}

export const updateStatus = (status:string) => async (dispatch:any) => {
    let Response = await profileAPI.updateStatus(status)
    if (Response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
}

export const savePhoto = (file:any) => async (dispatch:any) => {
    let Response = await profileAPI.savePhoto(file)

    if (Response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(Response.data.data.photos));
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId;
    let Response = await profileAPI.saveProfile(profile)

    if (Response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("edit-profile", { _error: Response.data.message[0] }));
    }
}

export default profileReducer;











