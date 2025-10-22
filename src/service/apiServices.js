import axios from 'axios';
import {useSelector} from 'react-redux';
import React from 'react';
import {store} from '../redux/store';
// import { MMKV } from 'react-native-mmkv'

// Initialize MMKV instance (fast local storage)
// const storage = new MMKV()

// Create Basic Auth credentials (username:password → base64 encoded)
// const credentials = `${Config.USER_NAME}:${Config.PASSWORD}`
// const base64Credentials = base64.encode(credentials)

// Axios instance configuration

const $http = axios.create({
  baseURL: 'https://quivio-apim-dev-budwh2h7bnfhf2cg.z03.azurefd.net',
  timeout: 50000, // 50 sec timeout
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Basic U09OTlk6U09OTlk=',
    device_id: '7236E6EF-6E89-47F7-85A2-3AE0C9EB8DCD',
    device_type: 1,
    os: 'IOS',
    version: '1.0.0',
    device_token: '123' ?? '',

    // timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    tenant_id: 'f00e9d76-545b-4f96-a4f1-ab7e1c649c0e',
  },
});
console.log('http', $http);

const storeNew = store.getState();

const token = storeNew.Authentication.token;

// console.log('token', token);

// console.log('objectobject', token);
// Local helpers to get saved tokens/device info
//  const getAuthToken = () => storage.getString('authToken')
//  const getTeanentToken = () => storage.getString('tenantToken')
//  const getDeviceID = () => storage.getString('deviceId')
//  const getDeviceToken = () => storage.getString('deviceToken')
// Endpoints that require Basic Auth
// const BASIC_AUTH_ENDPOINTS = [endpoints.app.checkVersion]

// // Request interceptor → runs before every API request
$http.interceptors.request.use(
  async config => {
    //      const token = getAuthToken()
    //      const tenantID = getTeanentToken()
    //      const fcmToken = getFCMToken()
    //      const endpoint = config.url ?? ''

    //      config.headers.device_id = getDeviceID()
    //      config.headers.device_token = getDeviceToken()

    //      const isBasicTokenRequired = BASIC_AUTH_ENDPOINTS.includes(endpoint)

    if (token) {
      // Logged in → Use Bearer token
      config.headers.Authorization = `Bearer ${token}`;

      // config.headers.tenant_id = tenantID;
      //  config.headers.fcm_token = fcmToken
    } else {
      // Not logged in or special endpoint → Use Basic Auth
      config.headers.Authorization = `Basic U09OTlk6U09OTlk=`;
    }

    return config;
  },
  error => Promise.reject(new Error(error)),
);

// // Function to handle expired token
//  const onTokenExpire = async () => {
//    try {
//     if (!getAuthToken()) return

//      removeAuthToken()
//      removeTenantID()
//      store.dispatch({ type: 'CLEAR_ALL' })
//      removeOrg()
//      reset(screenNames.login) // Navigate user to login screen
//    } catch (error) {
//      console.error('API Error:', error)
//    }
//  }

// // Response interceptor → runs after API response
//  const setupInterceptor = (handleError) => {
//    $http.interceptors.response.use(
//     (response) => {
//        // Success → just return response
//        return response
//     },
//     (error) => {
//       AnalyticsService.logEvent('API_ERROR_RESPONSE', error)
//       console.log('API error:', error)

//       if (error.response) {
//         const status = error.response.data.statusCode
//         const message = error.response.data?.message || 'An error occurred'
//         const description =
//           error.response.data?.data?.description ||
//           localString.SESSION_EXPIRED_DESC
//         const isAdditional = error?.response?.data?.isAdditional

//         if (
//           status === 400 ||
//           status === 403 ||
//           status === 402 ||
//           status === 498 ||
//           status === 503
//         ) {
//           if (status === 400 && !isAdditional) {
//             showErrorToast(message)
//           }
//         } else if (status === 401 && !error?.response?.data?.data) {
//           onTokenExpire()
//         } else if (status === 401) {
//           handleError({
//             isSessionExpire: true,
//             message,
//             description,
//           })
//         } else if (status === HTTP_ERROR_CODES.MAINTENANCE) {
//           handleError({ errorCode: status })
//         } else if (error.message.includes('Network Error')) {
//           showErrorToast('Network Error - Please check your connection.')
//         }
//       } else {
//         AnalyticsService.logEvent('API_ERROR', error)
//         if (error?.code !== 'ERR_NETWORK') {
//           showErrorToast('Something went wrong. Please try again.')
//         }
//       }

//       return error.response
//     },
//   )
// }

export {$http};
