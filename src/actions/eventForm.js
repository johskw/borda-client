export const actionType = {
  INPUT_THEME: 'INPUT_THEME',
  INPUT_DETAIL: 'INPUT_DETAIL',
  INPUT_CHOICE: 'INPUT_CHOICE',
  INPUT_PASSWORD: 'INPUT_PASSWORD',
  ADD_CHOICE: 'ADD_CHOICE',
  REMOVE_CHOICE: 'REMOVE_CHOICE'
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
