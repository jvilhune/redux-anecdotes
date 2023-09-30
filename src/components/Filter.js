import { filterChange } from '../reducers/filterReducer'
import { useDispatch } from 'react-redux'
import { notificationChange } from '../reducers/notificationReducer'


const Filter = (props) => {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    event.preventDefault()
    const content = event.target.value
    console.log(content)
    dispatch(filterChange(content))
    dispatch(notificationChange(`only anecdotes containing the word '${content}' are displayed`))
    setTimeout(() => { dispatch(notificationChange(null)) }, 5000)
  }
  const style = {
    marginBottom: 10
  }

  return (
    <p style={style}>
      filter <input onChange={handleChange} />
    </p>
  )
}

export default Filter