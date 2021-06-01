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
   

  
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0]);
     const handleAnecdotesClick = () => {
     
       setSelected(Math.floor(Math.random() * anecdotes.length))
     }
     
     const handleVotesClick = () => {
      let copy = [...votes];
      copy[selected] += 1;
      setVotes(copy);  
}

const maximumVotes = () => {
    let x = 0
    let loc = 0
    votes.forEach((n, index) => {
      if (x < n) {
        x = n
        loc = index
      }
    })
    return loc;
  }

  return (
    <div>
            
  
           <p>{anecdotes[selected]} </p>
           <p> It has  {votes[selected]}  Votes </p>
        
      <p> <button onClick={handleAnecdotesClick}>Next Anecdotes </button>
      <button onClick={handleVotesClick}>Votes </button>
      
       </p>
       <p> <h1> Anecdote with most setVotes</h1></p>
        <p>  {anecdotes[maximumVotes()]}  </p>
        <p> Has {votes[maximumVotes()]} votes</p>
       
    </div>
  )
}

export default App