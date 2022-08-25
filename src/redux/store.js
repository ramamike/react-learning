import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sideBarReducer from "./sideBarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: "message 0", likesCount: 12 },
                { id: 1, message: "message 1", likesCount: 13 },
                { id: 2, message: "message 2", likesCount: 9 },
                { id: 3, message: "message 3", likesCount: 8 },
                { id: 4, message: "message 4", likesCount: 1 },
            ],
            newPostText: '',
        },

        dialogsPage: {
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
        },

        sideBar: {}
    },

    _callSubscriber() {
        console.log('refactoring');
    },


    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagePage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sideBarReducer(this._state.sideBar, action);

        this._callSubscriber(this._state);

    }
}

export default store;
window.store = store;