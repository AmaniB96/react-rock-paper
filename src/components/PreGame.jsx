import './PreGame.css'
import HandIcon from '../assets/images/icon-paper.svg'
import Scissor from '../assets/images/icon-scissors.svg'
import Rock from '../assets/images/icon-rock.svg'

export default function PreGame({NewScreen}) {

    return (
        <>
            <div className='triangle'>
                <div onClick={() => NewScreen(HandIcon)} className='hand'>
                    <img src={HandIcon} alt="" />
                </div>
                 <div onClick={() => NewScreen(Scissor)} className='scissor'>
                    <img src={Scissor} alt="" />
                </div>
                 <div onClick={() => NewScreen(Rock)} className='rock'>
                    <img src={Rock} alt="" />
                </div>
            </div>
        </>
    )
}