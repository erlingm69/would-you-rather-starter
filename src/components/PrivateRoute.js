import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authedUser, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => {
            return (
            authedUser === null ?
                <Redirect to={`/login?next=${props.location.pathname}`} />
                : <Component {...props} />
        )}} />
    );
};

function mapStateToProps({ authedUser }) {
    return {
        authedUser
    }
}
export default connect(mapStateToProps)(PrivateRoute);