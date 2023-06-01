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
            ]
        }
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

    addPost() {

    let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
    }

export default store;
