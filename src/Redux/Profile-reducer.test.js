import profileReducer, { addPostActionCreator } from "./Profile-reducer"

it ('new post should be added without mistakes', () => {
    // test data
    let action = addPostActionCreator("pokemon")
    let state = {
        posts:[
            { id: 1, message: 'Hi, how are you', likesCount: 12 },
            { id: 2, message: 'It`s my first post', likesCount: 11 },
            { id: 3, message: 'What are you talking about', likesCount: 13 },
            { id: 4, message: 'I don`t understand what it happens', likesCount: 15 },
            { id: 5, message: 'Fight', likesCount: 111 }
        ]
    };
    // action
    let newState = profileReducer(state, action);
    expect (newState.posts.length) .toBe(6);
});

