import React from 'react'
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

function UserItem({ users, dispatch, userId, next }) {
    const history = useHistory()

    function handleLogin(e) {
        dispatch(setAuthedUser(userId))
        history.push(next === undefined ? "/" : next)
    }

    return (
        <div className="user-item" onClick={(e) => handleLogin(e)}>
            <img className="avatar" src={users[userId].avatarURL} alt={users[userId].name}/>
            <h4>{users[userId].name}</h4>
        </div>
    )
}

function mapStateToProps({ users }, { userId }) {
    return { users}
}

export default connect(mapStateToProps)(UserItem)