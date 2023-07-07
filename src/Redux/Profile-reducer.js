import { profileAPI, usersAPI } from "./api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts:[
        { id: 1, message: 'Hi, how are you', likesCount: 12 },
        { id: 2, message: 'It`s my first post', likesCount: 11 },
        { id: 3, message: 'What are you talking about', likesCount: 13 },
        { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
        { id: 5, message: 'Fight', likesCount: 111 }
    ],
    newPostText: "my creat power",
    profile: null,
    status:" "
};

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
            id: 6,
            message: state.newPostText,
            likesCount: 0
        };
        return {
            ...state,
            posts: [...state.posts, newPost],
            newPostText: ''
        };
    }
        case UPDATE_NEW_POST_TEXT: {
        return {
            ...state,
            newPostText: action.newText
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

        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text }) 
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(Response => {
        dispatch(setUserProfile (Response.data));
    });
}

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(Response => {
        dispatch(setStatus(Response.data));
    });
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(Response => {
        if (Response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
    });
}

export default profileReducer;














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