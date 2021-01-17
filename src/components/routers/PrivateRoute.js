import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const AuthRouter = ({ component: Component, isAuth, ...rest }) => {
    return (
        <Route
            component={(props) =>
                isAuth ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );
};

export default AuthRouter;
