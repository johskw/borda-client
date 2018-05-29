import { actionType } from '../actions/eventForm';

const initialState = {
  theme: '',
  detail: '',
  choices: ['', ''],
  password: '',
  num: 2
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.INPUT_THEME:
      return {
        ...state,
        theme: action.payload.text
      };

    case actionType.INPUT_DETAIL:
      return {
        ...state,
        detail: action.payload.text
      };

    case actionType.INPUT_CHOICE:
      let choices = [...state.choices]
      choices[action.payload.id] = action.payload.text
      return {
        ...state,
        choices
      };

    case actionType.INPUT_PASSWORD:
      return {
        ...state,
        password: action.payload.text
      };

    case actionType.ADD_CHOICE:
      return {
        ...state,
        choices: [...state.choices, ''],
        num: state.num + 1
      };

    case actionType.REMOVE_CHOICE:
      choices = [...state.choices]
      choices.pop();
      return (state.num === 2)
        ? state
        : {
        ...state,
        choices,
        num: state.num - 1
      };

    case actionType.CLEAR_FORM:
      return initialState;

    default:
      return state;
  }
};
