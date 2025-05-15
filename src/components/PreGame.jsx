import './PreGame.css'
import HandIcon from '../assets/images/icon-paper.svg'
import Scissor from '../assets/images/icon-scissors.svg'
import Rock from '../assets/images/icon-rock.svg'

export default function PreGame() {
    return (
        <>
            <div className='triangle'>
                <div className='hand'>
                    <img src={HandIcon} alt="" />
                </div>
                 <div className='scissor'>
                    <img src={Scissor} alt="" />
                </div>
                 <div className='rock'>
                    <img src={Rock} alt="" />
                </div>
            </div>
        </>
    )
}