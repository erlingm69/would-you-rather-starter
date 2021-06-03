import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

function ViewQuestion({ questions, id, dispatch }) {

    const question = questions[id]
    if (question === undefined) {
        return (
            <div className="center">
                <h1>404 - No Such Poll!</h1>
                <Link className="btn" to="/">Go To Home</Link>
            </div>
        )
    }

    return (
        <div>
            <h2 className="center">Would You Rather?</h2>
            <div className="question-item">
                <div className="poll-option">{questions[id].optionOne.text}</div>
                <div className="bold-and-margin">OR</div>
                <div className="poll-option">{questions[id].optionTwo.text}</div>
            </div>
        </div>
    )
}

function mapStateToProps({ questions }, props) {
    const { id } = props.match.params
    return {
        questions,
        id,
    }
}
export default connect(mapStateToProps)(ViewQuestion)
