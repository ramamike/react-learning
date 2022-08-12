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

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('refactoring');
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;
window.store = store;