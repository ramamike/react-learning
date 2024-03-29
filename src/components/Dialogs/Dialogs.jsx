import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map(dialog =>
        <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
    )

    let messagesElements = state.messagesData.map(message =>
        <Message message={message.message} key={message.id}/>)

    let newMessageText = state.newMessageText;
    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (event) => {
        let newMessageInTextArea = event.target.value;
        props.updateNewMessageText(newMessageInTextArea);
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