import endpoints from '../endpoints';
import {getApiCall} from '../apiActions';
import {AppError} from '../api/app-error';

const getLocationComponents = async queryParams => {
  const response = await getApiCall(
    endpoints.sensing.locationComponents,
    queryParams,
  );

  if (response && response.statusCode === 200) {
    return response.data;
  } else {
    throw new AppError(
      response?.message || 'getLocationComponents get failed',
      response?.statusCode,
      response,
      response?.message,
    );
  }
};
export default getLocationComponents;
