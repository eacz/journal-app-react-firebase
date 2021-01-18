import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { removeError, setError } from '../../actions/ui';
import useForm from '../../hooks/useForm';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const { msgError, loading } = useSelector((state) => state.ui);

    const [formValues, handleInputChange] = useForm({
        email: '',
        password: '',
    });
    const { email, password } = formValues;
    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            dispatch(setError('Please, fill all the fields'));
            return;
        }
        dispatch(removeError());
        dispatch(startLoginEmailPassword(email, password));
    };

    const handleGoogleLogin = () => {
        dispatch(startGoogleLogin());
    };
    return (
        <>
            <h3 className="auth__title mb-5">Login</h3>
            <form onSubmit={handleLogin} className="animate__animated animate__fadeIn animate__faster">
                {msgError && (
                    <div className="auth__alert-error">{msgError}</div>
                )}
                <input
                    autoComplete="off"
                    className="auth__input"
                    type="text"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                />
                <button
                    disabled={loading}
                    type="submit"
                    className="btn btn-block btn-primary">
                    Login
                </button>
                <div className="auth__social-networks">
                    <p>Login with Social Networks</p>
                    <div onClick={handleGoogleLogin} className="google-btn">
                        <div className="google-icon-wrapper">
                            <img
                                className="google-icon"
                                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                alt="google button"
                            />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link className="link" to="/auth/register">
                    Create a new account
                </Link>
            </form>
        </>
    );
};

export default LoginScreen;
