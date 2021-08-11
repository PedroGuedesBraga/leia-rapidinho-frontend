import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../utils';


const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Fragment>
            <Route {...rest}>
                {true ? <Component /> : <Redirect to="login" />}
            </Route>
        </Fragment>
    )
}

export default PrivateRoute;