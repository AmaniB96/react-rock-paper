import Logo from '../assets/images/logo.svg'
import './Header.css'

export default function Header({score}) {
    return (
        <>
        <div className='header'>
            <img src={Logo} alt="" />
            <div className='score'>
                <p>SCORE</p>
                <span>{score}</span>
            </div>
        </div>
        </>
    )
}