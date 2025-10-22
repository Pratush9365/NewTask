import endpoints from '../endpoints';
import {AppError} from '../api/app-error';
import {
  deleteApiCall,
  getApiCall,
  getApiCallCustom,
  postApiCall,
  putApiCall,
} from '../apiActions';
// import { showErrorToast } from '@quivio/components/toast/toast'

const getWaterTypeList = async queryParams => {
  const response = await getApiCall(
    endpoints.sensing.waterTypeList,
    queryParams,
  );

  if (response?.statusCode === 200) {
    return response?.data;
  } else {
    // if (response?.statusCode !== HTTP_ERROR_CODES.MAINTENANCE) {
    // //   showErrorToast(response?.message)
    // }
    console.log('Response', response);
    throw new AppError(
      response?.message ?? 'getWaterTypeList get failed',
      response?.statusCode,
      response,
      response?.message,
    );
  }
};

const addWaterSource = async (params, update = false) => {
  let apiCall = postApiCall;
  let endpoint = endpoints.sensing.waterSource;

  if (update) {
    const {water_source_id, ...rest} = params;
    apiCall = putApiCall;
    endpoint = `${endpoints.sensing.waterSource}/${water_source_id}`;
    console.log('addWaterSource response', params, endpoint);
    params = rest;
  }

  const response = await apiCall(endpoint, params);

  if (response?.statusCode === 200) {
    return response;
  } else {
    throw new AppError(
      response?.message ?? 'addWaterSource failed',
      response?.statusCode,
      response,
      response?.message,
    );
  }
};

const getWaterSourceList = async queryParams => {
  const response = await getApiCall(endpoints.sensing.waterSource, queryParams);

  if (response?.statusCode === 200) {
    return response?.data;
  } else {
    // if (response?.statusCode !== HTTP_ERROR_CODES.MAINTENANCE) {
    // //   showErrorToast(response?.message)
    // }
    throw new AppError(
      response?.message ?? 'getWaterSourceList get failed',
      response?.statusCode,
      response,
      response?.message,
    );
  }
};

const deleteWaterSource = async (id, params) => {
  const response = await deleteApiCall(
    `${endpoints.sensing.waterSource}/${id}`,
    params,
  );

  if (response?.data?.statusCode === 200) {
    return response?.data;
  } else {
    // showErrorToast(response?.data?.message)
    throw new AppError(
      response?.data?.message ?? 'deleteWaterSource get failed',
      response?.data?.statusCode,
      response,
      response?.data?.message,
    );
  }
};

const getWaterCSV = async queryParams => {
  const response = await getApiCallCustom(endpoints.sensing.waterSourceCSV, {
    params: queryParams,
  });
  if (response?.status === 200) {
    return response?.data;
  } else {
    // showErrorToast(response?.message)
    throw new AppError(
      response?.message ?? 'getWaterCSV get failed',
      response?.statusCode,
      response,
      response?.message,
    );
  }
};

export {
  getWaterTypeList,
  addWaterSource,
  getWaterSourceList,
  deleteWaterSource,
  getWaterCSV,
};
