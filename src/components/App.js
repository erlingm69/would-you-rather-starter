import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LoadingBar from 'react-redux-loading'
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

function App({ dispatch, loading }) {
  useEffect(() => {
    dispatch(handleInitialData())
  }, [dispatch])

  return (
    <Router>
      <div className="container">
        <LoadingBar />
        {
          !loading &&
          <>
            <Nav />
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/add" component={AddQuestion} />
              <PrivateRoute exact path="/questions/:id" component={ViewQuestion} />
              <PrivateRoute exact path="/leaderboard" component={Leaderboard} />
              <Route component={NotFound} />
            </Switch>
          </>
        }
      </div>
    </Router>
  );
}

function mapStateToProps({ loadingBar }) {
  return {
    loading: loadingBar.default === undefined || loadingBar.default === 1
  }
}
export default connect(mapStateToProps)(App)
