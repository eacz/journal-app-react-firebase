import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { firebase } from '../../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import { startLoadingNotes } from '../../actions/notes';
import LoadingScreen from '../LoadingScreen';

const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggedIn(true);
                dispatch(startLoadingNotes(user.uid));
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        });
    }, [dispatch, setChecking, setIsLoggedIn]);

    if (checking) {
        return <LoadingScreen />;
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PrivateRoute
                        isAuth={isLoggedIn}
                        exact
                        path="/"
                        component={JournalScreen}
                    />
                    <PublicRoute
                        isAuth={isLoggedIn}
                        path="/auth"
                        component={AuthRouter}
                    />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;
