const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE_TEXT = 'SEND-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessageText;
            return state;
        case SEND_MESSAGE_TEXT:
            let newMessage = state.newMessageText;
            state.messagesData.push({ id: 5, message: newMessage });
            state.newMessageText = '';
            return state;
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