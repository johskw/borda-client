export const formatValidationError = (err) => {
  const errors = err.response.data.errors;
  const errMsgs = {};
  Object.keys(errors).forEach((key) => {
    errMsgs[key] = errors[key].message;
  });
  return errMsgs;
};
