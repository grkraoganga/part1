import React from 'react'
const Header = (props) => {
    return (
        <div>
            <h1>{props.course}</h1>
        </div>
      )
}

const Total = (props) => {
  return (
      <div>
         <h1><p> Total number of exercises {props.exercises}</p></h1>
      </div>
    )
}
 const Part = (props) =>{
  return (
    <div>
        <h1> 
        <p>
        {props.part[0].name} , No of exercises  :  {props.part[0].exercises}
      </p>
      <p>
        {props.part[1].name} , No of exercises  :  {props.part[1].exercises}
      </p>
      <p>
        {props.part[2].name} , No of exercises  :  {props.part[2].exercises}
      </p>


        </h1>
      </div>
  )
 }
const Content = (props) => {
  return (
      <div>
          <Part part = {props.part} ></Part>
      </div>
    )
}

const App = () => {
  const course = 'Full Stack open 2021'
  const parts = [
    {
      name: 'Fundamentals of Web App',
      exercises: 9
    },
  {
      name: 'Introduction to React',
      exercises: 12
    },
  {
    name: 'Communication with server',
    exercises: 18
  }
  ]

  return (
    <div>
      <Header course={course} />
      <Content part = {parts}></Content>

      <Total  exercises = {parts[0].exercises + parts[1].exercises + parts[2].exercises}></Total>
    </div>
  )
}

export default App