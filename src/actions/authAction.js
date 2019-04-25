import axios from 'axios';
import setAuthToken from '../helpers/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, SET_CURRENT_USER } from '../helpers/types';

// Register User
export const registerUser = (userData, history, loadingState) => dispatch => {
    axios
        .post('http://localhost:5000/api/users/register', userData)
        .then(res => {
            console.log(res)
            history.push('/login');
            loadingState = false;
        })
        .catch(err => {
            loadingState = false;
            console.log(err);
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        });
};

// Login - Get User Token
export const loginUser = (userData, loadingState) => dispatch => {
    axios
        .post('http://localhost:5000/api/users/login', userData)
        .then(res => {
            if (res.status === 200) {
                // Save to localStorage
                const { token } = res.data;
                // Set token to ls
                localStorage.setItem('jwtToken', token);
                // Set token to Auth header
                setAuthToken(token);
                // Decode token to get user data
                const decoded = jwt_decode(token);
                // Set current user
                dispatch(setCurrentUser(decoded));
            }
            else {
                alert("problem occured while authenticating, Try again");
            }
            loadingState = false;
        })
        .catch(err => {
            console.log(err)
            loadingState = false;
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        });
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};

// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};
