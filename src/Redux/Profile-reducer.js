const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts:[
        { id: 1, message: 'Hi, how are you', likesCount: 12 },
        { id: 2, message: 'It`s my first post', likesCount: 11 },
        { id: 3, message: 'What are you talking about', likesCount: 13 },
        { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
        { id: 5, message: 'Fight', likesCount: 111 }
    ],
    newPostText: "my creat power"
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST,})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text }) 

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