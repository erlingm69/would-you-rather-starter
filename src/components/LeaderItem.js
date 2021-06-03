import React from 'react'
import { connect } from 'react-redux'

function LeaderItem({ users, userId }) {

    return (
        <div className="leader-item">
            <img className="avatar" src={users[userId].avatarURL} alt={users[userId].name}/>
            <h4>{users[userId].name}</h4>
            <p>Answered: {Object.keys(users[userId].answers).length}</p> 
            <p>Asked: {Object.keys(users[userId].questions).length}</p>
            <p className="score">Score: {Object.keys(users[userId].answers).length + Object.keys(users[userId].questions).length}</p>
        </div>
    )
}

function mapStateToProps({ users }) {
    return { users}
}

export default connect(mapStateToProps)(LeaderItem)