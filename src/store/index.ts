import {configureStore} from '@reduxjs/toolkit'
import userReducer from './userSlice';
import stepsReducer from './stepsSlice'
import tabsReducer from './tabsSlice'
import contentReducer from './contentSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    steps: stepsReducer,
    tabs: tabsReducer,
    content: contentReducer
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
