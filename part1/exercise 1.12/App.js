import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState({x:0})
  const handleAnecdotesClick = () => {
 setSelected({...selected, x : selected.x+1})
    
  }
  const App1 = () => {
    if (selected.x === 5){
      selected.x  = -1
    } 
    return(
      <div>
        <p>
       
        </p>
      </div>
    )
  }
  return (
    <div>

<p>{anecdotes[selected.x]} </p>
      
      <p> <button onClick={handleAnecdotesClick}>Next Anecdotes </button> </p>
      
     <App1></App1>
    </div>
  )
}

export default App
