import React from 'react'
import { connect } from 'react-redux'
import QuestionListItem from './QuestionListItem'

function Home({ questions, questionId }) {
    return (
        <div>
            <ul>
                {
                    questions && Object.keys(questions).map((questionId) => (
                        <li key={questionId}>
                            <QuestionListItem questionId={questionId} />
                        </li>
                    ))}
            </ul>
        </div>
    )
}

function mapStateToProps({ questions }) {
    return {
       questions
    }
}
export default connect(mapStateToProps)(Home)
