import React, { useState } from 'react'

const App = () => {
 
  const [clicks, setClicks] = useState({
    good: 0, neutral: 0,bad: 0
  })

  const handleGoodClick = () => {
    setClicks({ ...clicks, good: clicks.good + 1 })
  }

  const handleNeutralClick = () => {
    setClicks({ ...clicks, neutral: clicks.neutral + 1 })
  }
  const handleBadClick = () => {
    setClicks({ ...clicks, bad: clicks.bad + 1 })
  }

  return (
    <div>
      <p> <h1> Give Feedback</h1></p>
     <button onClick={handleGoodClick}>Good</button>
     <button onClick={handleNeutralClick}>Neutral</button>
     <button onClick={handleBadClick}>Bad</button>
     
     <p> <h1> Statistics</h1></p>
     <p> <h1> Good  : {clicks.good}</h1></p>
     <p> <h1> Neutral  : {clicks.neutral}</h1></p>
     <p> <h1> Bad  : {clicks.bad}</h1></p>
    </div>
  )
}

export default App
