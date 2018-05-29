export const actionType = {
  CREATE_EVENT: 'CREATE_EVENT'
};

export const createEvent = (event) => ({
  type: actionType.CREATE_EVENT,
  payload: {
    event
  }
});
