import Logo from '../assets/images/logo.svg'
import './Header.css'

export default function Header() {
    return (
        <>
        <div className='header'>
            <img src={Logo} alt="" />
            <div className='score'><p>Score</p></div>
        </div>
        </>
    )
}