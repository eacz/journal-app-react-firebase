import React from 'react';
import { Link } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

const RegisterScreen = () => {
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
        password2: '',
    });
    const { name, email, password, password2 } = formValues;

    const dispatch = useDispatch();
    const { msgError } = useSelector((state) => state.ui);

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegisterWithEmailPasswordName(email, password, name));
        }
    };

    const isFormValid = () => {
        if (name.trim().length === 0) {
            dispatch(setError('The name is required'));
            return false;
        } else if (!validator.isEmail(email)) {
            dispatch(setError('Invalid email'));
            return false;
        } else if (password !== password2 || password < 5) {
            dispatch(
                setError(
                    'Password should be at least 6 characters and match eachother'
                )
            );
            return false;
        }
        dispatch(removeError());
        return true;
    };

    return (
        <>
            <h3 className="auth__title mb-5">Register</h3>
            <form onSubmit={handleRegister}>
                {msgError && (
                    <div className="auth__alert-error">{msgError}</div>
                )}
                <input
                    className="auth__input"
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                />
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
                <input
                    className="auth__input"
                    type="password"
                    placeholder="Confirm Password"
                    name="password2"
                    value={password2}
                    onChange={handleInputChange}
                />
                <button
                    type="submit"
                    className="btn mb-5 btn-block btn-primary">
                    Register
                </button>
                <Link className="link" to="/auth/login">
                    Already registered?
                </Link>
            </form>
        </>
    );
};

export default RegisterScreen;
