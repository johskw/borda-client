import axios from 'axios';
import { push } from 'react-router-redux';
import { formatValidationError } from '../utils/errorFormatter';

export const actionType = {
  INPUT_THEME: 'INPUT_THEME',
  INPUT_DETAIL: 'INPUT_DETAIL',
  INPUT_CHOICE: 'INPUT_CHOICE',
  INPUT_PASSWORD: 'INPUT_PASSWORD',
  ADD_CHOICE: 'ADD_CHOICE',
  REMOVE_CHOICE: 'REMOVE_CHOICE',
  CLEAR_FORM: 'CLEAR_FORM',
  START_POST_REQUEST: 'START_POST_REQUEST',
  CREATE_EVENT: 'CRAETE_EVENT',
  ADD_ERRORS: 'ADD_ERRORS'
};

export const inputTheme = (text) => ({
  type: actionType.INPUT_THEME,
  payload: {
    text
  }
});

export const inputDetail = (text) => ({
  type: actionType.INPUT_DETAIL,
  payload: {
    text
  }
});

export const inputChoice = (id, text) => ({
  type: actionType.INPUT_CHOICE,
  payload: {
    id,
    text
  }
});

export const inputPassword = (text) => ({
  type: actionType.INPUT_PASSWORD,
  payload: {
    text
  }
});

export const addChoice = () => ({
  type: actionType.ADD_CHOICE
});

export const removeChoice = () => ({
  type: actionType.REMOVE_CHOICE
});

const startPostRequest = () => ({
  type: actionType.START_POST_REQUEST
});

const clearForm = () => ({
  type: actionType.CLEAR_FORM
});

const addErrors = (errors) => ({
  type: actionType.ADD_ERRORS,
  payload: {
    errors
  }
});

export const postEvent = (event) => {
  return dispatch => {
    dispatch(startPostRequest());
    axios.post('http://127.0.0.1:8080/api/events', {
      ...event
    }).then(res => {
      dispatch(clearForm());
      dispatch(push(`/events/${res.data._id}`));
    }).catch(err => {
      if (err.response && err.response.status === 400) {
        const errors = formatValidationError(err);
        dispatch(addErrors(errors));
        return;
      }
      console.log(err);
    });
  };
}
