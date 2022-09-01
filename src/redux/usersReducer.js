const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [
        // { id: 0, fallowed: true, fullName: "Mihal", status: "admin", location: { city: "Vazan", country: "Belarus" } },
        // { id: 1, fallowed: true, fullName: "Pavel", status: "friend", location: { city: "Minsk", country: "Belarus" } },
        // { id: 2, fallowed: false, fullName: "Alex", status: "friend", location: { city: "Minsk", country: "Belarus" } },
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, fallowed: true }
                    }
                    return u;
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, fallowed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (userId) => {
    return {
        type: FOLLOW, userId
    }
};
export const unfollowAC = (userId) => {
    return {
        type: UNFOLLOW, userId
    }
};
export const setUsersAC = (users) => {
    return {
        type: SET_USERS, users
    }
};

export default usersReducer;