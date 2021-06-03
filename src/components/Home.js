import React, { useState } from 'react'
import { connect } from 'react-redux'
import QuestionListItem from './QuestionListItem'
import { Link } from "react-router-dom"

const MODE_UNANSWERED = "unanswered"
const MODE_ANSWERED = "answered"

function Home({ answered, unanswered, questionId }) {
    const [mode, setMode] = useState(MODE_UNANSWERED)

    function handleMode(newMode) {
        setMode(newMode)
    }

    return (
        <div>
            <div className="home-mode">
                <button style={mode === MODE_UNANSWERED ? { background: "blue" } : null} onClick={(e) => handleMode(MODE_UNANSWERED)}>Unanswered</button>
                <button style={mode === MODE_ANSWERED ? { background: "blue" } : null} onClick={(e) => handleMode(MODE_ANSWERED)}>Answered</button>
            </div>
            <ul>
                {
                    mode === MODE_UNANSWERED && unanswered && Object.keys(unanswered).map((questionId) => (
                        <li key={questionId}>
                            <Link to={`/questions/${questionId}`}>
                                <QuestionListItem questionId={questionId} />
                            </Link>
                        </li>
                    ))}
                {
                    mode === MODE_ANSWERED && unanswered && Object.keys(answered).map((questionId) => (
                        <li key={questionId}>
                            <QuestionListItem questionId={questionId} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}

function mapStateToProps({ questions, authedUser }) {
    let answered = {}
    let unanswered = {}

    Object.keys(questions).forEach((questionId) => {
        if ((questions[questionId].optionOne.votes.includes(authedUser)) ||
            (questions[questionId].optionTwo.votes.includes(authedUser))) {
            answered = {
                ...answered,
                [questionId]: questions[questionId]
            }
        } else {
            unanswered = {
                ...unanswered,
                [questionId]: questions[questionId]
            }
        }
    })

    return {
        unanswered,
        answered,
    }
}
export default connect(mapStateToProps)(Home)
