import React from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleSaveQuestionAnswer } from '../actions/questions'

function Poll({ questions, questionId, dispatch }) {
    const history = useHistory()

    function handleVoteOne() {
        dispatch(handleSaveQuestionAnswer(questionId, "optionOne"))
        history.push("/")
    }

    function handleVoteTwo() {
        dispatch(handleSaveQuestionAnswer(questionId, "optionTwo"))
        history.push("/")
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
