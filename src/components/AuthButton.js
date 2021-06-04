import React from 'react'
import { connect } from "react-redux"
import { setAuthedUser } from '../actions/authedUser'

function AuthButton({authedUser, users, dispatch}) {

    function handleLogout(e) {
        dispatch(setAuthedUser(null))
    }

    if (authedUser !== null) {
        return (<div className="auth-button">
            <div>{users[authedUser].name}</div>
            <button onClick={(e) => handleLogout(e)}>Logout</button>
        </div>)
    } else {
        return <></>
    }
}

function mapStateToProps({ authedUser, users }) {
    return { authedUser, users}
}

export default connect(mapStateToProps)(AuthButton)
