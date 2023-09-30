import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({ 
  name: 'notification',
  initialState: 'Anecdote application. Vote for an existing anecdote and/or add a new anecdote to the list',
  reducers: {
    notificationChange(state, action) {
      console.log('notificationReducer occurred')


      console.log('action', action)
      console.log('action.payload', action.payload)
      console.log('state', state)
      console.log('state', JSON.parse(JSON.stringify(state)))

      return action.payload
    }
  },
})


export const { notificationChange } = notificationSlice.actions
export default notificationSlice.reducer