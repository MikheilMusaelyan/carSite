import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    messages: []
}

export const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addMessage: (state: any, action: any) => {
            const message = {
                id: nanoid(),
                text: action.payload
            }
            state.messages.push(message)
        },
        removeMessage: (state: any, action) => {
            state.messages = state.messages.filter((message: any) => 
            message.id !== action.payload)
        }
    }
})

export const {addMessage, removeMessage} = messageSlice.actions
export default messageSlice.reducer