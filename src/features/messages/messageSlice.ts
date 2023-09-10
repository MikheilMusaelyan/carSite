import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    notification: {}
}
  
export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state: any, action: any) => {
            console.log(action.payload)
            let messageCopy = [...state.messages]
            messageCopy.push(action.payload)
            return {
                ...state,
                messages: messageCopy
            }
        },
    }
})

export const {addMessage} = messageSlice.actions
export default messageSlice.reducer


