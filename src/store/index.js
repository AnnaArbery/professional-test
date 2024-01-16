import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import stepsReducer from './stepsSlice'
import tabsReducer from './tabsSlice'
import contentReducer from './contentSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    steps: stepsReducer,
    tabs: tabsReducer,
    content: contentReducer
  },
});
