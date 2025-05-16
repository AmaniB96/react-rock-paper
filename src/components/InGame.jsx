import './InGame.css'
import Result from './result'

export default function InGame({playerChoice, computerChoice, updateScore, resetGame}) {
    return (
        <div className='game'>
            <div className='player'>
                <p>YOU PICKED</p>
                <div className={playerChoice.className}>
                <img src={playerChoice.image} alt="" />
            </div>
            </div>
            <Result playerChoice={playerChoice} computerChoice={computerChoice} updateScore={updateScore} resetGame={resetGame}/>
            <div className='player'>
                <p>THE HOUSE PICKED</p>
                <div className={computerChoice.className}>
                <img src={computerChoice.image} alt="" />
            </div>
            </div>
        </div>
    )
}