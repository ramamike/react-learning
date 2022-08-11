let rerenderEntireTree = () => {
    console.log ('refactoring');
}

let state = {
    profilePage: {
        posts: [
            { id: 0, message: "message 0", likesCount: 12 },
            { id: 1, message: "message 1", likesCount: 13 },
            { id: 2, message: "message 2", likesCount: 9 },
            { id: 3, message: "message 3", likesCount: 8 },
            { id: 4, message: "message 4", likesCount: 1 },
        ],
        newPostText : '',
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
            { id: 4, message: "message 4" }
        ]
    }
}

window.state=state;

export const addPost = () => {
    let newPost = {
        id:5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);

}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);

}

export const subscribe = (observer) => {
    rerenderEntireTree=observer;    
}

export default state;