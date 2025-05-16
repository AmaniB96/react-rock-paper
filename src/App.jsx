import { useState } from 'react'
import './App.css'
import Header from './components/header'
import PreGame from './components/PreGame'
import Rules from './components/rules'
import InGame from './components/InGame'
import HandIcon from './assets/images/icon-paper.svg'
import Scissor from './assets/images/icon-scissors.svg'
import Rock from './assets/images/icon-rock.svg'
import Result from './components/result'

function App() {

  const [score, setScore] = useState(0)
  const [state, setState] = useState(false)
  const [playerChoice,SetplayerChoice] = useState(null)
  const [computerChoice,SetcomputerChoice] = useState('')
  
  const updateScore = (result) => {
    if (result === "YOU WON!") {
      setScore(score + 1)
    }
    else if (result === "YOU LOST!")
      setScore(score -1)
  }

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
    }, 1000)
}

  return (
    <>
    <div className='container'>
      <Header score={score}></Header>
      {state == false ? <PreGame NewScreen={NewScreen}/> : <InGame playerChoice={playerChoice} computerChoice={computerChoice} updateScore={updateScore}/>}
      <Rules></Rules>
    </div>
    </>
  )
}

export default App
