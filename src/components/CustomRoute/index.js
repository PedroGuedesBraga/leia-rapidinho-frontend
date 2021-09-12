import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLoggedIn } from '../../utils';


const CustomRoute = ({ component: Component, type, ...rest }) => {
    const condition = type === 'private' ? isLoggedIn() : !isLoggedIn();
    const redirectPath = type === 'private' ? 'login' : 'game'
    return (
        <Fragment>
            <Route {...rest}>
                {condition ? <Component /> : <Redirect to={redirectPath} />}
            </Route>
        </Fragment>
    )
}

export default CustomRoute;