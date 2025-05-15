import './Header.css'

import HandIcon from '../assets/images/icon-paper.svg'
import Scissor from '../assets/images/icon-scissors.svg'
import Rock from '../assets/images/icon-rock.svg'

export default function InGame({playerChoice}) {
    console.log(playerChoice);
    
    return (
        <div className='game'>
            <div className='player'>
                <p></p>
                <img src={playerChoice} alt="" />
            </div>
            <div className='player'>
                <p></p>
                <img src={Rock} alt="" />
            </div>
        </div>
    )
}