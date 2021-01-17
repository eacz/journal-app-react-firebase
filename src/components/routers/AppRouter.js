import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import JournalScreen from '../journal/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
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
