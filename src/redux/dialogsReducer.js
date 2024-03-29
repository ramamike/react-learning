const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE_TEXT = 'SEND-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        { id: 0, name: "user 0" },
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
        { id: 3, name: "user 3" },
        { id: 4, name: "user 4" },
    ],
    messagesData: [
        { id: 0, message: "message 0" },
        { id: 1, message: "message 1" },
        { id: 2, message: "message 2" },
        { id: 3, message: "message 3" },
        { id: 4, message: "message 4" },
    ],
    newMessageText: ""
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newMessageText
            };
        case SEND_MESSAGE_TEXT:
            let newMessage = state.newMessageText;
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, { id: 5, message: newMessage }]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE_TEXT
    }
}

export const updateNewMessageTextActionCreator = (newMessage) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newMessageText: newMessage
    }
}

export default dialogsReducer;