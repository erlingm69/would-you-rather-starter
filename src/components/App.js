import { useEffect } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import AddQuestion from './AddQuestion'
import ViewQuestion from './ViewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Nav from './Nav'

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])
  
  return (
    <Router>
      <div className="container">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/add" component={AddQuestion} />
        <Route exact path="/questions/:questionId" component={ViewQuestion} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
    </Router>
  );
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App)
