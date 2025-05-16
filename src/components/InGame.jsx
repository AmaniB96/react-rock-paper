import './InGame.css'


export default function InGame({playerChoice, computerChoice}) {
    return (
        <div className='game'>
            <div className='player'>
                <p>YOU PICKED</p>
                <div className={playerChoice.className}>
                <img src={playerChoice.image} alt="" />
            </div>
            </div>
            <div className='player'>
                <p>THE HOUSE PICKED</p>
                <div className={computerChoice.className}>
                <img src={computerChoice.image} alt="" />
            </div>
            </div>
        </div>
    )
}