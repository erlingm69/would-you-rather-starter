import React from 'react'
import { connect } from 'react-redux'
import LeaderItem from './LeaderItem'

function Leaderboard({ users, authedUser }) {
    return (
        <div>
            <ul>
                {
                    users && Object.keys(users).map((userId) => (
                        <li key={userId}>
                            <LeaderItem userId={userId} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}
function score(users, userId) {
    return Object.keys(users[userId].answers).length + Object.keys(users[userId].questions).length
}

function mapStateToProps({ users, authedUser }) {
    let sortedUsers = Object.keys(users).sort((a,b) => (score(users, b) - score(users, a))).reduce(
        (obj, userId) => { 
          obj[userId] = users[userId]; 
          return obj;
        }, 
        {}
      )

    return {
        users :sortedUsers,
        authedUser
    }
}
export default connect(mapStateToProps)(Leaderboard)
