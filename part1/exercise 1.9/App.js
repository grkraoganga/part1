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
  
  
  const Statistics = (props) => {
    
    
    
    if(props.x===0) {
      return (
        <div>
          <p> <h1> Statistics</h1></p>
          <p><h1> No Feedback Given </h1></p> 
        </div>
      )
    }
      if(props.x!==0){
        return (
          <div>
             <p> <h1> Statistics</h1></p>
            <p><h1> All : {clicks.bad+clicks.neutral+clicks.good} </h1></p> 
            <p><h1> Average  : {(clicks.good-clicks.bad)/(clicks.bad+clicks.neutral+clicks.good)}</h1></p>
            <p><h1> Positive  : {clicks.good*100/(clicks.bad+clicks.neutral+clicks.good)} %</h1></p>

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
     <p> <h1> Good  : {clicks.good}</h1></p>
     <p> <h1> Neutral  : {clicks.neutral}</h1></p>
     <p> <h1> Bad  : {clicks.bad}</h1></p>
     <Statistics x={clicks.bad+clicks.neutral+clicks.good}/>/>
    </div>
  )
}

export default App