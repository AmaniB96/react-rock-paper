import './InGame.css'


export default function InGame({playerChoice, computerChoice}) {
    return (
        <div className='game'>
            <div>
                <p>You picked</p>
                <div className={playerChoice.className}>
                <img src={playerChoice.image} alt="" />
            </div>
            </div>
            <div>
                <p>The house picked</p>
                <div className={computerChoice.className}>
                <img src={computerChoice.image} alt="" />
            </div>
            </div>
        </div>
    )
}