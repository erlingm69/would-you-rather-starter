export function questionIsAnswered(questions, questionId, authedUser) {
    return ((questions[questionId].optionOne.votes.includes(authedUser)) ||
    (questions[questionId].optionTwo.votes.includes(authedUser)))
}