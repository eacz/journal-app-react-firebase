import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
    return (
        <Route
            {...rest}
            component={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/auth" />
            }
        />
    );
};

export default PrivateRoute;
