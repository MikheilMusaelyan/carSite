import {combineReducers, configureStore} from '@reduxjs/toolkit';
import messageReducer from './features/messageSlice'
import notificationReducer from './features/notificationSlice'
import loginReducer from './features/loginSlice'

const rootReducer = combineReducers({
    message: messageReducer,
    notification: notificationReducer,
    login: loginReducer
});
  

export const store = configureStore({
    reducer: rootReducer
})