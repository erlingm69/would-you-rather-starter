import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_QUESTION_ANSWER } from '../actions/questions'

export default function users(state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS: return {
            ...state,
            ...action.questions
        }

        case ADD_QUESTION:
            const { question } = action

            return {
                ...state,
                [action.question.id]: question
            }

        case ADD_QUESTION_ANSWER:
            return {
                ...state,
                [action.id]: {
                    ...state[action.id],
                    [action.answer] : {
                        ...state[action.id][action.answer],
                        votes: state[action.id][action.answer].votes.concat([action.authedUser])
                    } 
                }
            }

        default: return state
    }
}