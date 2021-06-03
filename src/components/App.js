import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import AddQuestion from './AddQuestion'
import ViewQuestion from './ViewQuestion'
import Leaderboard from './Leaderboard'
import Login from './Login'
import Nav from './Nav'
import PrivateRoute from './PrivateRoute'
import NotFound from './NotFound'

function App({ dispatch }) {
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className="container">
        <Nav />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/add" component={AddQuestion} />
          <PrivateRoute exact path="/questions/:questionId" component={ViewQuestion} />
          <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
          <Route component={NotFound} />
        </Switch>
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
