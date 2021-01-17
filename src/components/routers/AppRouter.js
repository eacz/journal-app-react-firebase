import React, { useEffect } from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
import AuthRouter from './AuthRouter';
import { firebase } from '../../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { login } from '../../actions/auth';

const AppRouter = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));
            }
        });
    }, [dispatch]);
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={JournalScreen} />
                <Route path="/auth" component={AuthRouter} />
                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    );
};

export default AppRouter;
