import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from './Dialogs.module.css';
import Message from "./Message/Message";

const Dialogs = () => {

    let dialogsData = [
        { id: 0, name: "user 0" },
        { id: 1, name: "user 1" },
        { id: 2, name: "user 2" },
        { id: 3, name: "user 3" },
        { id: 4, name: "user 4" },
    ]

    let dialogsElements = dialogsData.map(dialog =>
        <DialogItem name={dialog.name} id={dialog.id} />
    )

    let messagesData = [
        { id: 0, message: "message 0" },
        { id: 1, message: "message 1" },
        { id: 2, message: "message 2" },
        { id: 3, message: "message 3" },
        { id: 4, message: "message 4" },
    ]

    let messagesElements = messagesData.map(message => <Message message={message.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div >
    )
}

export default Dialogs;