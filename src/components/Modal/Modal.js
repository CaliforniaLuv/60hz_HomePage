import { Link } from "react-router-dom";
import './Modal.css'

function Modal({Modal_Hiden, handleModal, handleModalBool, handleMdCheck}) {

    const openClick = (value) => {
        handleModal('Modal_Close')
        handleModalBool(false)
        handleMdCheck(value)
    }

    return(
        <section className={`${Modal_Hiden} Modal_Container`}>
            <div className='Modal_Main_Box'>
                <Link to="/" style={{marginTop: '10px'}}
                      onClick={() => openClick('home')}
                >
                    <img src="./logo/60hz.svg"/>
                </Link>
                <img onClick={() => openClick()} src="./icon/close.svg"/>
            </div>
            <ul className='Modal_List_Box'>
                 <a href='https://map.60hz.io/index.html' 
                    target="_blank" style={{ textDecoration: "none", color: "#000" }} 
                    onClick={() => openClick()}
                >
                    <li>
                        <div className="Modal_List_First">햇빛바람지도</div>
                    </li>
                </a>
                <Link to="/about"
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={() => openClick("Header_About")}
                >
                    <li>ABOUT</li>
                </Link>
                <Link to="/business"
                      style={{ textDecoration: "none", color: "black" }}  
                      onClick={() => openClick("Header_Business")}   
                >
                    <li>BUSINESS</li>
                </Link>
                <Link to="/career"
                      style={{ textDecoration: "none", color: "black" }}
                      onClick={() => openClick("Header_Career")}
                >
                    <li>CAREER</li>
                </Link>
            </ul>
        </section>
    )
}


export default Modal