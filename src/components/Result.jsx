import { useState, useEffect } from "react"
import './Result.css'

export default function Result({playerChoice, computerChoice, updateScore}) {
    const [result, setResult] = useState('')

    // Move the calculation into useEffect to prevent infinite loops
    useEffect(() => {
        if(computerChoice) {
            // Draw condition
            if (playerChoice.className === computerChoice.className) {
                setResult("IT'S A DRAW!")
                return
            }
            
            // Losing conditions
            if (
                (computerChoice.className === "hand" && playerChoice.className === "rock") ||
                (computerChoice.className === "scissor" && playerChoice.className === "hand") ||
                (computerChoice.className === "rock" && playerChoice.className === "scissor")
            ) {
                setResult("YOU LOST!")
                updateScore("YOU LOST!")
                return
            }
            
            // Winning condition (if not draw and not lost, then won)
            setResult("YOU WON!")
            updateScore("YOU WON!")
        }
    }, [computerChoice, playerChoice]) // Only run when choices change

    return (
        <div className="result">
            <h3>{result}</h3>
            <button>PLAY AGAIN</button>
        </div>
    )
}