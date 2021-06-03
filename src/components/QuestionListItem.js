import React from 'react'
import { connect } from 'react-redux'

function QuestionListItem({ questions, questionId }) {

    return (
        <div className="question-item">
            <div className="poll-option">{questions[questionId].optionOne.text}</div>
            <div className="bold-and-margin">OR</div>
            <div className="poll-option">{questions[questionId].optionTwo.text}</div>
        </div>
    )
}

function mapStateToProps({ questions }) {
    return { questions}
}

export default connect(mapStateToProps)(QuestionListItem)