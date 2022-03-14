import { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function Header({handleModal, handleAward, handleModalBool, MdCheck}) {

    const [scrollY, setScrollY] = useState('')
    const [select, setSelect] = useState('')
    // Header 상단 메뉴 Click에 의한 state 렌더링 관리(useEffect)
    const [click, setClick] = useState(0)


    useEffect(() => {
        if(MdCheck !== "") {
            setClick(click+1)
        } else if(MdCheck === "home") {
            openClick(MdCheck)
        }
    }, [MdCheck])
    
    const openClick = (value) => {
        
        if(value === "check" ) {
            handleModalBool(true)
            handleModal("") 
        }
        setClick(click+1)
        window.localStorage.setItem("selected", value)
    }



    // 헤더 메뉴 렌더링 effect 발동 시
    useEffect(() => {
        const data = window.localStorage.getItem("selected")
        if(data !== 'check') {
            setSelect(data)
        } else if(MdCheck) {
            setSelect(MdCheck)
        }
    },[click])

    // // 스크롤 제어
    window.onscroll = () => {
        scroll()
    }

    // 스크롤 탐색 함수 
    function scroll() {
        
        // Header 백그라운드 UI
        if(document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
            setScrollY('Header_Container_Show')
        } else {
            setScrollY('')
        }

        // ul 애니메이션 Y축 좌표
        const container = document.querySelector('.Award_Container')        
        if(container) {
            if(container.getBoundingClientRect().y < 900) {
                // 800 미만일 경우 애니메이션 On
                handleAward(true)
            } else if(container.getBoundingClientRect().y > 500) {
                // 600 초과일 경우 애니메이션 Off
                handleAward(false)
            }
        }

    }
    
    return(
        <>
            <header className={`Header_Container ${scrollY}`}>
                <div>

                    <Link to="/"
                       onClick={() => openClick(null)}
                    >
                        <img src="./logo/60hz.svg" alt='60hz_Logo'/>
                    </Link>
                    <img  onClick={() => openClick("check")} src="./icon/menu.svg" alt="Menu_Icon"/>
                </div>
                <nav className="Header_Nav_Box">
                    <div>
                        <a href='https://map.60hz.io/index.html' 
                           target="_blank" style={{ textDecoration: "none", color: "#fff" }} >
                            햇빛바람지도
                        </a>
                    </div>
                    <div style={{width: "65px"}}>
                        <Link to="/about"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => openClick("Header_About")}
                        >
                            <p style={{fontFamily: 
                                select === "Header_About" ? "SUIT-SemiBold" : ""}}
                            >
                                ABOUT
                            </p>
                        </Link>
                    </div>
                    <div style={{width: "95px"}}>
                        <Link to="/business"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => openClick("Header_Business")}
                        >
                            <p style={{fontFamily: 
                                select === "Header_Business" ? "SUIT-SemiBold" : ""}}>
                                BUSINESS
                            </p>
                        </Link>
                    </div>
                    <div style={{width: "77px"}}>
                        <Link to="/career"
                            style={{ textDecoration: "none", color: "black" }}
                            onClick={() => openClick("Header_Career")}
                        >
                            <p style={{fontFamily: 
                                select === "Header_Career" ? "SUIT-SemiBold" : ""}}>
                            CAREER
                            </p>
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header