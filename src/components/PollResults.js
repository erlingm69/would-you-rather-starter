import React from 'react'
import { connect } from 'react-redux'

function PollResults({ questions, questionId }) {
    return (
        <div className="question-item">
            <div className="poll-option">{questions[questionId].optionOne.text}</div>
            <div className="bold-and-margin">OR</div>
            <div className="poll-option">{questions[questionId].optionTwo.text}</div>
        </div>
    )
}

function mapStateToProps({ questions }, {questionId}) {
    return {
        questions,
        questionId
    }
}
export default connect(mapStateToProps)(PollResults)
