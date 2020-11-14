import { LOGIN, SIGNIN_USER_SUCCESS, SIGNUP_USER_SUCCESS, BAD_REQUEST, UPDATE_USER_FAIL, LOAD_USER, 
  LOAD_USER_SUCCESS, SIGNOUT_USER} from "./actionsTypes"
import {setToken, API, removeToken, getToken} from "../../../config/config"
import axios from "axios"
import { browserHistory } from 'react-router';

export const signinUser = ({ username, password })  =>{
  return  async (dispatch) => {
    dispatch({
      type: LOGIN
    });

    return axios.post(`${API}/signin`, { username, password })
      .then(response => {
        dispatch(signinUserSuccess(response.data.content.username));
        // - Save the JWT token
        setToken(response.data.token);
        // - redirect to the route '/dashboard'
        browserHistory.push('/dashboard');
      })
      .catch((error) => dispatch(onError(error.response || error)));
  }
};

export const signoutUser = () => {
  removeToken();
  return {
    type: SIGNOUT_USER
  };
}

/*
export const resetValidateFields = () => {
  return {
    type: RESET_VALIDATE_FIELDS
  }
};*/

export const getCurrentUser = () => {
  const token = getToken();
  return (dispatch, state) => {
    dispatch({
      type: LOAD_USER
    });

    axios.get(`${API}/user`, {
      headers: { 'x-access-token': token }
    })
      .then(response => {
        dispatch(getUserSuccess(response.data.content));
      })
      .catch(error => dispatch(onLoadUserError(error.response || error)));
  }
}

export const signupUser = ({name, username, email, password}) => {
  return dispatch => {
    dispatch({
      type: SIGNUP_USER
    });

    axios.post(`${API}/signup`, { name, username, email, password })
      .then(response => {
        dispatch(signupUserSuccess(response.data.content.username));
        setToken(response.data.token);
        browserHistory.push('/dashboard');
      })
      .catch(error => dispatch(onError(error.response || error)));
  }
}

export const  getUserSuccess = (payload) => {
  return {
    type: LOAD_USER_SUCCESS,
    payload
  };
}

export const signinUserSuccess = (payload) => {
  return {
    type: SIGNIN_USER_SUCCESS,
    payload
  };
}

export const signupUserSuccess = (payload) =>{
  return {
    type: SIGNUP_USER_SUCCESS,
    payload
  };
}

export const onError = (response) => {
  return {
    type: BAD_REQUEST,
    payload: getErrorMessage(response)
  };
}

export const onLoadUserError = (response) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: getErrorMessage(response)
  };
}

export const onUpdateUserError = (response) => {
  return {
    type: UPDATE_USER_FAIL,
    payload: getErrorMessage(response)
  };
}

const getErrorMessage = (response) => {
  let errorMessage;
  if (response.data) {
    errorMessage = response.data;
  }
  else {
    errorMessage = response;
  }
  return errorMessage;
}