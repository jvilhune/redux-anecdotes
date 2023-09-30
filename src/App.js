
import { useEffect } from 'react'
import Anecdotes from "./components/Anecdote"
import NewAnecdote from "./components/NewAnecdote"
import Filter from './components/Filter'
import Notification from './components/Notification'

import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'

//npm install redux
//npm install --save-dev jest @babel/preset-env @babel/preset-react eslint-plugin-jes
//npm install --save-dev deep-freeze
//npm install react-redux
//npm install @reduxjs/toolkit
//npm install json-server --save-dev
//npm install axios

const App = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  }, [dispatch]) 

  return(
    <div>
      <Notification />
      <NewAnecdote />
      <Filter />
      <Anecdotes />
    </div>
  )
}

export default App

