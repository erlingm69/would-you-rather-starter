import { saveQuestion, saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ADD_QUESTION_ANSWER = "ADD_QUESTION_ANSWER"

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
            optionOneText,
            optionTwoText,
            author: authedUser,
        })
            .then((question) => {
                dispatch(addQuestion(question))
            })
            .catch((e) => {
                console.warn('Error in handleAddQuestion: ', e);
                alert('There was an error liking the question. Try again.');
            });
    };
}

function addQuestionAnswer(id, authedUser, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        id,
        authedUser,
        answer
    }
}

export function handleSaveQuestionAnswer(id, answer) {
    // answer is "optionOne" or "optionTwo"
    return (dispatch, getState) => {
        const { authedUser } = getState()

        saveQuestionAnswer (authedUser, id, answer)
            .then(() => {
                dispatch(addQuestionAnswer(id, authedUser, answer));
            })
            .catch((e) => {
                console.warn('Error in handleToggleTweet: ', e);
                alert('There was an error liking the tweet. Try again.');
            });
    };
}
