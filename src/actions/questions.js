import { saveQuestion } from '../utils/api'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
    return (dispatch, getState) => {
        const { authedUser } = getState()

        saveQuestion({
            optionOne: {
                votes: [],
                text: optionOneText,
              },
              optionTwo: {
                votes: [],
                text: optionTwoText
              },          
            author: authedUser,
        })
            .then((question) => {
                dispatch(addQuestion(question))
            })
            .catch((e) => {
                console.warn('Error in handleAddQuestion: ', e);
                alert('There was an error liking the tweet. Try again.');
            });
    };
}