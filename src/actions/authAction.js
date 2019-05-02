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
            $.notify({
                // options
                icon: 'glyphicon glyphicon-warning-sign',
                title: 'ERROR:',
                message: 'Please verify your credentials in order to connect',
                url: 'https://github.com/mouse0270/bootstrap-notify',
                target: '_blank'
            }, {
                    // settings
                    element: 'body',
                    position: null,
                    type: "danger",
                    allow_dismiss: true,
                    newest_on_top: false,
                    showProgressbar: false,
                    placement: {
                        from: "top",
                        align: "right"
                    },
                    offset: 20,
                    spacing: 10,
                    z_index: 1031,
                    delay: 5000,
                    timer: 1000,
                    url_target: '_blank',
                    mouse_over: null,
                    animate: {
                        enter: 'animated fadeInDown',
                        exit: 'animated fadeOutUp'
                    },
                    onShow: null,
                    onShown: null,
                    onClose: null,
                    onClosed: null,
                    icon_type: 'class',
                    template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
                        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                        '<span data-notify="icon"></span> ' +
                        '<span data-notify="title">{1}</span> ' +
                        '<span data-notify="message">{2}</span>' +
                        '<div class="progress" data-notify="progressbar">' +
                        '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                        '</div>' +
                        '<a href="{3}" target="{4}" data-notify="url"></a>' +
                        '</div>'
                });
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
