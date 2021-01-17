import types from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { finishLoading, startLoading } from './ui';

export const startLoginEmailPassword = (email, password) => {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            const { user } = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);
            dispatch(login(user.uid, user.displayName));
            dispatch(finishLoading())
        } catch (error) {
            console.log(error);
            dispatch(finishLoading())
        }
    };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                console.log(user);
                dispatch(login(user.uid, user.displayName));
            })
            .catch((e) => console.log(e));
    };
};

export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase
            .auth()
            .signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName));
            });
    };
};

export const login = (uid, displayName) => ({
    type: types.login,
    payload: { uid, displayName },
});
