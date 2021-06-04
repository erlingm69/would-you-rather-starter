import React from 'react'
import { connect } from 'react-redux'

function PollResults({ questions, authedUser, questionId }) {

    const question = questions[questionId];
    const optionOneAnswers = question.optionOne.votes.length
    const optionTwoAnswers = question.optionTwo.votes.length    
    const totalAnswers = optionOneAnswers + optionTwoAnswers
    const percentageOptionOne = (optionOneAnswers/totalAnswers*100).toFixed(0)
    const percentageOptionTwo = (optionTwoAnswers/totalAnswers*100).toFixed(0)
    const userSelectedOptionOne = question.optionOne.votes.includes(authedUser)
    const userSelectedOptionTwo = question.optionTwo.votes.includes(authedUser)

    return (
        <div>
            <div className="question-item">
                <div className="poll-option"
                style={userSelectedOptionOne ? { borderStyle: "dotted" } : null}
                >{question.optionOne.text}</div>
                <div className="bold-and-margin">OR</div>
                <div className="poll-option"
                style={userSelectedOptionTwo ? { borderStyle: "dotted"} : null}
                >{question.optionTwo.text}</div>
            </div>
            <div className="question-item">
                <div className="poll-option"><i>{`${percentageOptionOne}% ${optionOneAnswers} vote(s)`}</i></div>
                <div className="poll-option"><i>{`${percentageOptionTwo}% ${optionTwoAnswers} vote(s)`}</i></div>
            </div>
        </div>
    )
}

function mapStateToProps({ questions, authedUser }, { questionId }) {
    return {
        questions,
        authedUser,
        questionId
    }
}
export default connect(mapStateToProps)(PollResults)
