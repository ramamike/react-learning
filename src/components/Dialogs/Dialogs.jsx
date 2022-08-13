import React from "react";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {

    let state = props.store.getState().messagePage;
    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} />
    )

    let messagesElements = state.messagesData.map(message => <Message message={message.message} />)

    let newMessageText = state.newMessageText;
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator());
    }

    let onNewMessageChange = (event) => {
        let newMessageInTextArea = event.target.value;
        props.store.dispatch(updateNewMessageTextActionCreator(newMessageInTextArea));
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea
                            value={newMessageText}
                            onChange={onNewMessageChange}
                            placeholder='Enter message'>

                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Dialogs;