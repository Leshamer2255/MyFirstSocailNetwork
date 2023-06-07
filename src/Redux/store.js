import dialogsReducer from "./Dialogs-reducer";
import profileReducer from "./Profile-reducer";
import sidebarReducer from "./Sidebar-reducer";

let store = {
    _state : {
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
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber(){
        console.log("lalal")
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.profilePage = dialogsReducer(this._state.messagesPage, action);
        this._state.profilePage = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

      
export default store;
