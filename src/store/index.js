import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import stepsReducer from './stepsSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    steps: stepsReducer,
  },
});
