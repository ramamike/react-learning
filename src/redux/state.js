let state = {
    profilePage: {
        posts: [
            { id: 0, message: "message 0", likesCount: 12 },
            { id: 1, message: "message 1", likesCount: 13 },
            { id: 2, message: "message 2", likesCount: 9 },
            { id: 3, message: "message 3", likesCount: 8 },
            { id: 4, message: "message 4", likesCount: 1 },
        ],
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

export default state;