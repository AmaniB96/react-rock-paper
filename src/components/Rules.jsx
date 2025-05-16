import './Rules.css'
import RulesImg from '../assets/images/image-rules.svg'
import closeImg from '../assets/images/icon-close.svg'


export default function Rules({modal, Show, Hide}) {
    const handleClickOutside = (e) => {
        // Check if click was on the backdrop
        if (e.target.classList.contains(modal)) {
            Hide()
        }
    }
    const closeModalBtn = ()=> {
        Hide()
    }
    return (
        <>
            <button onClick={Show} className='rules'>Rules</button>
            <div className={modal} onClick={handleClickOutside}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <img src={closeImg} alt="close button" className='close-image' onClick={() => closeModalBtn()}/>
                    <img src={RulesImg} alt="Game Rules" className="rules-image" />
                </div>
            </div>
        </>
    )
}