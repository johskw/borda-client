import axios from 'axios';

export const actionType = {
  CREATE_EVENT: 'CREATE_EVENT',
  STERT_GET_REQUEST: 'START_GET_REQUEST',
  RECEIVE_EVENT: 'RECEIVE_EVENT'
};

const startGetRequest = () => ({
  type: actionType.STERT_GET_REQUEST
});

const receiveEvent = (event, error) => ({
  type: actionType.RECEIVE_EVENT,
  payload: {
    event,
    error
  }
});

export const getEvent = (id) => {
  return dispatch => {
    dispatch(startGetRequest());
    axios.get(`http://localhost:8080/events/${id}`).then(res => {
      dispatch(receiveEvent(res.data, false));
    }).catch((err) => {
      dispatch(receiveEvent({}, true));
    })
  };
};

export const createEvent = (event) => ({
  type: actionType.CREATE_EVENT,
  payload: {
    event
  }
});
