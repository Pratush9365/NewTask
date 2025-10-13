// import {configureStore} from '@reduxjs/toolkit';
// import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {combineReducers} from 'redux';
// import userdata from '../slice/crud';
// import AuthenticationReducer from '../slice/login';
// import apiDataReducer from '../slice/asyncOperation';
// import waterSourceReducer from '../slice/waterSource';

// const rootReducer = combineReducers({
//   userdata,
//   Authentication: AuthenticationReducer,
//   apiData: apiDataReducer,
//   waterSource: waterSourceReducer,
// });
// console.log('hhhh');

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
//   whitelist: ['userdata', 'Authentication', 'apiData', 'waterSource'],
// };
// console.log('hhhhhhh', rootReducer);

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });
// export const persistor = persistStore(store);

// store.js (suggested)
import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userdata from '../slice/crud';
import AuthenticationReducer from '../slice/login';
import apiDataReducer from '../slice/asyncOperation';
import waterSourceReducer from '../slice/waterSource';
import logger from 'redux-logger';

const authPersistConfig = {
  key: 'Authentication',
  storage: AsyncStorage,
  whitelist: ['user', 'token'],
};
const userdataPersistConfig = {
  key: 'userdata',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  userdata: persistReducer(userdataPersistConfig, userdata),
  Authentication: persistReducer(authPersistConfig, AuthenticationReducer),
  apiData: apiDataReducer,
  waterSource: waterSourceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export const persistor = persistStore(store);
