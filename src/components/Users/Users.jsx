import React from "react";
import ava from './avatars/ava1.png'
import styles from './users.module.css'

let Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                { id: 0, photoUrl: './avatars.ava1', followed: true, fullName: "Mihal", status: "admin", location: { city: "Vazan", country: "Belarus" } },
                { id: 1, photoUrl: './avatars.ava1', followed: true, fullName: "Pavel", status: "friend", location: { city: "Minsk", country: "Belarus" } },
                { id: 2, photoUrl: './avatars.ava1', followed: false, fullName: "Alex", status: "friend", location: { city: "Minsk", country: "Belarus" } }
            ]
        );
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={ava} alt='ava' className={styles.userPhoto} />
                    </div>
                    <div>
                        {
                            u.followed
                                ? <button onClick={() => { props.unfollow(u.id) }}>Follow</button>
                                // ? <button onClick={() => { alert('hi' + u.id) }}>Follow</button>
                                : <button onClick={() => { props.follow(u.id) }}>Unfollow</button>
                        }
                    </div>
                </span>
                <span>
                    <span>
                        <div>
                            {u.fullName}
                        </div>
                        <div>
                            {u.status}
                        </div>
                    </span>
                    <span>
                        <div>
                            {u.location.country}
                        </div>
                        <div>
                            {u.location.city}
                        </div>
                    </span>
                </span>
            </div>)
        }
    </div >
}

export default Users; 