
const SEND_MESSAGE = 'SEND-MESSAGE';


type DialogType ={
    id: number
    name: string
}
type MessageType ={
    id: number
    message: string
}

let initialState = {
    dialogsData:[
        { id: 1, name: 'Anastasya' },
        { id: 2, name: 'Anton' },
        { id: 3, name: 'Xoma' },
        { id: 4, name: 'Dimas' },
        { id: 5, name: 'Colleague' }
    ] as Array<DialogType>,
    messagesData:[
        { id: 1, message: 'Hi' },
        { id: 2, message: 'What do you mean' },
        { id: 3, message: 'I can do it' },
        { id: 4, message: 'yo' }, 
        { id: 5, message: 'Yo' }
    ] as Array<MessageType>
};


export type initialStateType = typeof initialState

const dialogsReducer = (state = initialState, action: any): initialStateType => {
    switch(action.type) {
        case SEND_MESSAGE:{
            let body = action.newMessageText;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body } ]
            };  
        }
            default:
                return state;
    }   

}

type sendMessageCreatorActionType = {
    type: typeof SEND_MESSAGE
    newMessageText: string
}

export const sendMessageCreator = (newMessageText: string): sendMessageCreatorActionType => ({type: SEND_MESSAGE, newMessageText})

export default dialogsReducer;