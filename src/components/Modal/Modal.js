import { useState } from 'react'
import './Modal.css'

function Modal({Modal_Hiden, handleModal}) {

    const [modal_close, Modal_close] = useState('')

    const openClick = () => {
        handleModal('Modal_Close')
    }

    return(
        <section className={`${Modal_Hiden} Modal_Container`}>
            <div className='Modal_Main_Box'>
                <img src="./logo/60hz.svg"/>
                <img onClick={() => openClick()} src="./icon/close.svg"/>
            </div>
            <ul className='Modal_List_Box'>
                <li>햇빛바람지도</li>
                <li>ABOUT</li>
                <li>BUSINESS</li>
                <li>CAREER</li>
            </ul>
        </section>
    )
}


export default Modal