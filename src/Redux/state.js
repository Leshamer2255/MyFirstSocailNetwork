import { renderEntireTree } from "../render";

  
   let state = {
    profilePage: {
        posts:[
            { id: 1, message: 'Hi, how are you', likesCount: 12 },
            { id: 2, message: 'It`s my first post', likesCount: 11 },
            { id: 3, message: 'What are you talking about', likesCount: 13 },
            { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
            { id: 5, message: 'Fight', likesCount: 111 }
          ],
        newPostText: "my creat power"
    },
    messagesPage: {
        dialogsData:[
            { id: 1, name: 'Anastasya' },
            { id: 2, name: 'Anton' },
            { id: 3, name: 'Xoma' },
            { id: 4, name: 'Dimas' },
            { id: 5, name: 'Colleague' }
        ],
        messagesData:[
            { id: 1, message: 'Hi' },
            { id: 2, message: 'What do you mean' },
            { id: 3, message: 'I can do it' },
            { id: 4, message: 'yo' },
            { id: 5, message: 'Yo' }
        ]
    }
  }

export let addPost = (postMessage) => {

    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);
}
export default state;