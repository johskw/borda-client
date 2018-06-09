import { actionType } from '../actions/event';

const initialState = {
  event: {
    theme: '',
    detail: '',
    choices: [
      { id: '', name: '' },
      { id: '', name: '' }
    ]
  },
  error: false
};

export default (state = initialState, action ) => {
  switch (action.type) {
    case actionType.STERT_GET_REQUEST:
      return initialState;
    case actionType.RECEIVE_EVENT:
      return {
        event: action.payload.event,
        error: action.payload.error
      };
    case actionType.CREATE_EVENT:
      return {
        ...state,
        event: action.payload.event
      };
    default:
      return state;
  }
};
