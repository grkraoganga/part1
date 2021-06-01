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
        {props.part.name} , No of exercises  :  {props.part.exercises}
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
  const part0 = {
      name: 'Fundamentals of Web App',
      exercises: 9
    }
  const part1 = {
      name: 'Introduction to React',
      exercises: 12
    }
  const part2 = {
    name: 'Communication with server',
    exercises: 18
  }


  return (
    <div>
      <Header course={course} />
      <Content part = {part0}>  </Content>
      <Content part = {part1}></Content>
      <Content part = {part2}></Content>
      <Total  exercises = {part0.exercises + part1.exercises + part2.exercises}></Total>
    </div>
  )
}

export default App