

import React, { useState } from 'react'

const App = () => {
 
  const [clicks, setClicks] = useState({
    x: 0, good: 0, neutral: 0,bad: 0
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
  const handleFeedbackClick = () => {
    setClicks({ ...clicks, x: clicks.x + 1 })
  }
  
  
  const Statistics = () => {
    
    <p> <h1> Statistics</h1></p>
    if(clicks.x===0) {
      return (
     
        <div>
  
          <p><h1> Select Feedback button for Feedback   </h1></p>

        </div>
      )
      }
      if(clicks.x!==0) {
        return (
       
          <div>
                <p> <h1> Statistics</h1></p>
            <table border = "1">
         <tr>
            <th>All :</th>
            <th> {clicks.bad+clicks.neutral+clicks.good} </th>
         </tr>
         <tr>
            <th>Average :</th>
            <th> {(clicks.good-clicks.bad)/(clicks.bad+clicks.neutral+clicks.good)}</th>
         </tr>
         <tr>
            <th>Positive :</th>
            <th> {clicks.good*100/(clicks.bad+clicks.neutral+clicks.good)} %</th>
         </tr>
         </table>
          </div>
        )
        }

  }

  return (
    <div>
      <p> <h1> Give Feedback</h1></p>
     <button onClick={handleGoodClick}>Good</button>
     <button onClick={handleNeutralClick}>Neutral</button>
     <button onClick={handleBadClick}>Bad</button>
     <button onClick={handleFeedbackClick}>  feedback </button>
     <table border = "1">
         <tr>
            <th>Good :</th>
            <th>{clicks.good}</th>
         </tr>
         <tr>
            <th>Neutral :</th>
            <th>{clicks.neutral}</th>
         </tr>
         <tr>
            <th>Bad :</th>
            <th>{clicks.bad}</th>
         </tr>
         </table>
     <Statistics />
    </div>
  )
}

export default App