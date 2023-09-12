import {combineReducers, configureStore} from '@reduxjs/toolkit';
import messageReducer from './features/messages/messageSlice'
import notificationReducer from './features/messages/notificationSlice'

const rootReducer = combineReducers({
    message: messageReducer,
    notification: notificationReducer, 
});
  

export const store = configureStore({
    reducer: rootReducer
})