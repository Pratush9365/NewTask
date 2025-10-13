import {postApiCall} from '../apiActions';
import endpoints from '../endpoints';
import {AppError} from './app-error';
const signInWithEmail = async data => {
  const response = await postApiCall(endpoints?.auth?.login, data);
  if (response?.statusCode === 200) {
    return response;
  } else {
    throw new AppError(
      'Login failed',
      response?.statusCode,
      response,
      response?.message,
    );
  }
};
export default signInWithEmail;
