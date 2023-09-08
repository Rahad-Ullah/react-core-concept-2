import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './User'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  const addToFive = (num) =>{
    alert(num + 5)
  }

  return (
    <>
      <h1>My React App</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me 2</button>
      <button onClick={() => {alert('third button clicked')}}>Third</button>
      <button onClick={() => addToFive(5)}>Addto5</button>

      <Counter></Counter>
      <Team></Team>
      <Users></Users>
      <Friends></Friends>
    </>
  )
}

export default App
