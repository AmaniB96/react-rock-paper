import { useState } from 'react'
import './App.css'
import Header from './components/header'
import PreGame from './components/PreGame'
import Rules from './components/rules'
import InGame from './components/InGame'

function App() {

  const [state, setState] = useState(false)
  const [playerChoice,SetplayerChoice] = useState(null)

  const NewScreen = (image)=> {
    setState(true)
    SetplayerChoice(image)
  }




  return (
    <>
    <div className='container'>
      <Header></Header>
      {state == false ? <PreGame NewScreen={NewScreen}/> : <InGame playerChoice={playerChoice}/>}
      <Rules></Rules>
    </div>
    </>
  )
}

export default App
