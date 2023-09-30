import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdotes'


const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const generateId = () =>
  Number((Math.random() * 1000000).toFixed(0))

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

var initialState = anecdotesAtStart.map(asObject)

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updAnecdotes(state, action) {

      /*
      console.log('action.payload', action.payload)
      console.log('action.payload.id', action.payload.id)
      console.log('action.payload.content', action.payload.content)
      console.log('action.payload.votes', action.payload.votes)
      */

      const newStates = state.map(sweetItem => sweetItem.id !== action.payload.id ? sweetItem : action.payload)
      return newStates
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})


export const handleVoteClick = anecdote => {
  return async dispatch => {
    const changedAnec = { ...anecdote, votes: anecdote.votes+1 }
    const updanecdote = await anecdoteService.update(changedAnec.id, changedAnec)

    console.log('updanecdote.votes', updanecdote.votes)
    dispatch(updAnecdotes(updanecdote))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const { updAnecdotes, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer