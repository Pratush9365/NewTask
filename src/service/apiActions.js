import {Keyboard} from 'react-native';
import {$http} from './apiServices';
/**
 * Common function to make a POST API call.
 */
const postApiCall = async (endPoint, params = {}) => {
  console.log('endPoint', endPoint);
  try {
    const response = await $http.post(endPoint, params);
    return response.data;
  } catch (error) {
    console.log('errrrrrr', endPoint, params, error);
    throw new Error(error.message);
  }
};

/**
 * Common function to make a PUT API call.
 */
const putApiCall = async (endPoint, params = {}) => {
  try {
    const response = await $http.put(endPoint, params);
    console.log('putApiCall response', response);
    return response.data;
  } catch (error) {
    console.log('putApiCall error', error, error?.message);
    throw new Error(error?.message || 'Something went wrong');
  }
};

const getApiCall = async (endPoint, body = {}) => {
  try {
    const response = await $http.get(endPoint, {params: body});
    console.log('Get API', endPoint, response);
    return response?.data;
  } catch (error) {
    console.log('getApiCall error', error);
    throw new Error(error?.message);
  }
};

const getApiCallCustom = async (endPoint, config = {}) => {
  try {
    const response = await $http.get(endPoint, config);
    console.log('Get API Custom', endPoint, response);
    return response;
  } catch (error) {
    console.log('getApiCall Custom error', error);
    throw new Error(error?.message);
  }
};

/**
 * Common function to make a PATCH API call.
 */
const patchApiCall = async (endPoint, params = {}, headers = {}) => {
  try {
    const result = await $http.patch(endPoint, params, headers);
    console.log('patchApiCall response', result);
    return result?.data;
  } catch (error) {
    console.log('patchApiCall error', error);
    throw new Error(error?.message);
  }
};

/**
 * Common function to make a DELETE API call.
 */
const deleteApiCall = async (endPoint, paramsData = {}) => {
  try {
    const requestConfig = {data: paramsData};
    const result = await $http.delete(endPoint, requestConfig);
    return result;
  } catch (error) {
    Keyboard.dismiss();
    throw new Error(error?.message);
  }
};

export {
  deleteApiCall,
  getApiCall,
  patchApiCall,
  postApiCall,
  putApiCall,
  getApiCallCustom,
};
