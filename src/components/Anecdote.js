import { useDispatch, useSelector } from 'react-redux'
import { handleVoteClick } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'


// JSX
// space -> &nbsp;
// line break -> <br/>
// division of a section (line break) -> <div></div>
// paragraph break (single empty line fefore and after) -> <p></p>
// {/* This is a comment in JSX */}
// <!-- This is a comment in HTML -->
// This is a comment in javascript
/* This is a comment in javascript */

const Anecdote = ({ anecdote, handleClick, handle2Click }) => {
  return(
   <p>
    <button onClick={handleClick}>vote</button>   
      &nbsp;{anecdote.content} 
      <strong> {anecdote.votes}</strong>
    </p>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()
  const anecdotes = useSelector( ({ filter, anecdotes }) => {

    var len = anecdotes.length
    var a = 0
    var b = 0
    var anecdotesFiltered = []

    for(a=0;a<len;a++) {
      if(anecdotes[a].content.indexOf(filter) !== -1) {

        var viewObject = {
          content: anecdotes[a].content,
          id: anecdotes[a].id,
          votes: anecdotes[a].votes
        }
        anecdotesFiltered[b] = viewObject
        b++
      }
    }

    if(anecdotesFiltered.length > 0) {
      anecdotes = anecdotesFiltered
    }
    else if(anecdotesFiltered.length === 0) {
      return anecdotesFiltered
    }
    else {
      anecdotes = anecdotes
    }


    if(anecdotesFiltered.length > 1) {
      anecdotes.sort((firstItem, secondItem) => secondItem.votes - firstItem.votes)
      return anecdotes
    }

    /*
    console.log('anecdotesFiltered.length', anecdotesFiltered.length)
    console.log('len', len)
    console.log('LASTRETURN')
    console.log('anecdotes', anecdotes)
    */

    anecdotes.sort((firstItem, secondItem) => secondItem.votes - firstItem.votes)
    return anecdotes
  } )

  return(
    <div>
      <h3>Anecdotes</h3>
      {anecdotes.map(anecdote =>
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => 
          {dispatch(handleVoteClick(anecdote)) 
           dispatch(notificationChange(`anecdote '${anecdote.content}' voted`))
           setTimeout(() => { dispatch(notificationChange(null)) }, 5000)
          }}
        />
      )}
    </div>
  )
}


export default Anecdotes
