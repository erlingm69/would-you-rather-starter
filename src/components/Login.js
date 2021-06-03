import React from 'react'
import { useLocation } from "react-router-dom";
import { connect } from 'react-redux'
import UserItem from './UserItem'

function Login({ users }) {
    const location = useLocation()
    const search = location.search.split("?next=")
    const next = search.length === 2 ? search[1] : undefined

    return (
        <div className="center">
            <h3>Please Login</h3>
            <ul>
            {
                    users && Object.keys(users).map((userId) => (
                        <li key={userId}>
                            <UserItem userId={userId} next={next}/>
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}

function mapStateToProps({ users }) {
    return { users}
}

export default connect(mapStateToProps)(Login)