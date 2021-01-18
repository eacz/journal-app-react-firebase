import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import authReducer from '../reducers/authReducer';
import thunk from 'redux-thunk';
import UIReducer from '../reducers/UIReducer';
import notesReducer from '../reducers/notesReducer';

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;

const reducers = combineReducers({
    auth: authReducer,
    ui: UIReducer,
    notes: notesReducer
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
