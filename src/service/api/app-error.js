function AppError(message, code, data, error) {
  const err = new Error(message);
  err.code = code;
  err.data = data;
  err.error = error;
  return err;
}

export { AppError };
