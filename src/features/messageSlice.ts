import { createSlice } from "@reduxjs/toolkit";
import { getData } from "../shared/service";

const initialState = {
    messages: [
        {
            sender: 'them',
            message: 'hi'
        },
        {
            sender: 'them',
            message: 'hi'
        },
        {
            sender: 'me',
            message: 'hi'
        },
        {
            sender: 'me',
            message: 'hi'
        },
        {
            sender: 'them',
            message: 'hi'
        },
        {
            sender: 'me',
            message: 'hi'
        }
    ],
    people: [],
    notification: {},
    messagesLoading: false
}
  
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state: any, action: any) => {
            let messageCopy = [...state.messages]
            messageCopy.push(action.payload)
            return {
                ...state,
                messages: messageCopy
            }
        },
        openUpMessages: (state: any, action: any) => {
            return {
                ...state,
                messages: getData(action.payload)
            }
        }
    }
})

export const {addMessage, openUpMessages} = messageSlice.actions
export default messageSlice.reducer