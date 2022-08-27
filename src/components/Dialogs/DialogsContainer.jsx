import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;
    
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (newMessageInTextArea) => {
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageInTextArea));
    }

    return (<Dialogs
        updateNewMessageText={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={state} />)
}

export default DialogsContainer;