const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

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

        messagePage: {
            dialogsData: [
                { id: 0, name: "user 0" },
                { id: 1, name: "user 1" },
                { id: 2, name: "user 2" },
                { id: 3, name: "user 3" },
                { id: 4, name: "user 4" },
            ],
            messagesData: [
                { id: 0, message: "message 0" },
                { id: 2, message: "message 2" },
                { id: 3, message: "message 3" },
                { id: 4, message: "message 4" },
            ]
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default store;
window.store = store;