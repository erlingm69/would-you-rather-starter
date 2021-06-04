import React from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

function Poll({ questions, questionId, dispatch }) {

    function handleVoteOne() {
        dispatch(handleSaveQuestionAnswer(questionId, "optionOne"))
    }

    function handleVoteTwo() {
        dispatch(handleSaveQuestionAnswer(questionId, "optionTwo"))
    }

    return (
        <div className="question-item">
            <button className="poll-option" onClick={(e) => handleVoteOne()}>
                {questions[questionId].optionOne.text}</button>
            <div className="bold-and-margin">OR</div>
            <button className="poll-option" onClick={(e) => handleVoteTwo()}>
                {questions[questionId].optionTwo.text}</button>
        </div>
    )
}

function mapStateToProps({ questions }, { questionId }) {
    return {
        questions,
        questionId
    }
}
export default connect(mapStateToProps)(Poll)
