import { stopSubmit } from "redux-form";
import { profileAPI, usersAPI } from "./api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    posts:[
        { id: 1, message: 'Hi, Barbi', likesCount: 12 },
        { id: 2, message: 'It`s my first post', likesCount: 11 },
        { id: 3, message: 'What are you talking about', likesCount: 13 },
        { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
        { id: 5, message: 'Fight', likesCount: 111 }
    ],
    profile: null,
    status:" "
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
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
                profile: {...state.profile, photos: action.photos}
            };
        }

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST,newPostText})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})


export const getUserProfile = (userId) => async (dispatch) => {
   let Response = await usersAPI.getProfile(userId)
        dispatch(setUserProfile (Response.data));
}

export const getStatus = (userId) => async (dispatch) => {
    let Response = await profileAPI.getStatus(userId)
        dispatch(setStatus(Response.data));

}

export const updateStatus = (status) => async (dispatch) => {
    let Response = await profileAPI.updateStatus(status)
        if (Response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
}   

export const savePhoto = (file) => async (dispatch) => {
    let Response = await profileAPI.savePhoto(file)

        if (Response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(Response.data.data.photos));
        }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    let Response = await profileAPI.saveProfile(profile)

        if (Response.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit("edit-profile", {_error: Response.data.message[0]}));
        }
}

export default profileReducer;











