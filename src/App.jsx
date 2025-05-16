import { useState } from 'react'
import './App.css'
import Header from './components/header'
import PreGame from './components/PreGame'
import Rules from './components/rules'
import InGame from './components/InGame'
import HandIcon from './assets/images/icon-paper.svg'
import Scissor from './assets/images/icon-scissors.svg'
import Rock from './assets/images/icon-rock.svg'

function App() {


  const [state, setState] = useState(false)
  const [playerChoice,SetplayerChoice] = useState(null)
  const [computerChoice,SetcomputerChoice] = useState('')

  const NewScreen = (choice)=> {
        setState(true)
        SetplayerChoice(choice)
    
    const choices = [
        { image: HandIcon, className: 'hand' },
        { image: Scissor, className: 'scissor' },
        { image: Rock, className: 'rock' }
    ]
    const randomChoice = choices[Math.floor(Math.random() * 3)]
     setTimeout(() => {
        SetcomputerChoice(randomChoice)
    }, 2000)
}

  return (
    <>
    <div className='container'>
      <Header></Header>
      {state == false ? <PreGame NewScreen={NewScreen}/> : <InGame playerChoice={playerChoice} computerChoice={computerChoice}/>}
      <Rules></Rules>
    </div>
    </>
  )
}

export default App
