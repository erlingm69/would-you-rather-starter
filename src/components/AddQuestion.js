import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

function AddQuestion({dispatch}) {
    const history = useHistory()
    const [optionOne, setOptionOne] = useState("")
    const [optionTwo, setOptionTwo] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(optionOne, optionTwo)
        dispatch(handleAddQuestion(optionOne, optionTwo))
        history.push("/")
    }

    return (
        <div className="center">
            <h3>Add a Question</h3>
            <form className="new-question" onSubmit={(e) => handleSubmit(e)}>
                <input type="text"
                    placeholder="Option One"
                    value={optionOne}
                    onChange={(e) => { setOptionOne(e.target.value) }}>
                </input>
                <h5>OR</h5>
                <input type="text"
                    placeholder="Option Two"
                    value={optionTwo}
                    onChange={(e) => { setOptionTwo(e.target.value) }}>
                </input>
                <button className="btn">ADD</button>
            </form>
        </div>
    )
}

export default connect()(AddQuestion)
