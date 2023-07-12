const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:{
            let body = action.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { id: 6, message: body } ]
            };  
        }
            default:
                return state;
    }   

}

export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;