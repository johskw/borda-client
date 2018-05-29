import { actionType } from '../actions/event';

const initialState = {
  theme: '',
  detail: '',
  choices: ['', ''],
  password: ''
};

export default (state = initialState, action ) => {
  switch (action.type) {
    case actionType.CREATE_EVENT:
      return action.payload.event;
    default:
      return state;
  }
};
