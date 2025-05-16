import { useState, useEffect } from "react"
import './Result.css'

export default function Result({playerChoice, computerChoice}) {
    const [result, setResult] = useState('')

    // Move the calculation into useEffect to prevent infinite loops
    useEffect(() => {
        if(computerChoice) {
            // Draw condition
            if (playerChoice.className === computerChoice.className) {
                setResult("It's a Draw!")
                return
            }
            
            // Losing conditions
            if (
                (computerChoice.className === "hand" && playerChoice.className === "rock") ||
                (computerChoice.className === "scissor" && playerChoice.className === "hand") ||
                (computerChoice.className === "rock" && playerChoice.className === "scissor")
            ) {
                setResult("You Lost!")
                return
            }
            
            // Winning condition (if not draw and not lost, then won)
            setResult("You Won!")
        }
    }, [computerChoice, playerChoice]) // Only run when choices change

    return (
        <div className="result">
            <h3>{result}</h3>
        </div>
    )
}