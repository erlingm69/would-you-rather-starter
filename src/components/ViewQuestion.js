import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { questionIsAnswered } from '../utils/helpers'
import Poll from './Poll'
import PollResults from './PollResults'

function ViewQuestion({ questions, authedUser, id, dispatch }) {

    const question = questions[id]
    if (question === undefined) {
        return (
            <div className="center">
                <h1>404 - No Such Poll!</h1>
                <Link className="btn" to="/">Go To Home</Link>
            </div>
        )
    }

    const isAnswered = questionIsAnswered(questions, id, authedUser)

    return (
        <div>
            <h2 className="center">Would You Rather?</h2>
            {
                isAnswered ? <>
                <h3>Results</h3>
                <PollResults questionId={id} />
                </> :
                <>
                    <h3>Select Your Preference</h3>
                    <Poll questionId={id} />
                    </>
            }
        </div>
    )
}

function mapStateToProps({ questions, authedUser }, props) {
    const { id } = props.match.params
    return {
        questions,
        authedUser,
        id,
    }
}
export default connect(mapStateToProps)(ViewQuestion)
