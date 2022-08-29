import { connect } from "react-redux";
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageText: (newMessageInTextArea) => {
            dispatch(updateNewMessageTextActionCreator(newMessageInTextArea));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;