import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div>
            <NavLink to={path}
                className={({ isActive }) => (isActive ? s.linkActive : s.linkNotActive)}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>
            {props.message}
        </div>
    )
}

const Dialog = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                <DialogItem name="user 1" id="1" />
                <DialogItem name="user 2" id="2" />
                <DialogItem name="user 3" id="3" />
            </div>
            <div className={s.messages}>
                <Message message="message 1" />
                <Message message="message 2" />
                <Message message="message 3" />
            </div>
        </div >
    )
}

export default Dialog;