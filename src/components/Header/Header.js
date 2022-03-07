import { useState } from 'react'
import { Link } from "react-router-dom";
import './Header.css'

function Header({handleModal, handleAward}) {

    const [scrollY, setScrollY] = useState('')

    const openClick = () => {
        handleModal("")
    }

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

                    <a href="/"
                    >
                        <img src="./logo/60hz.svg"/>
                    </a>
                    <img onClick={() => openClick()} src="./icon/menu.svg"/>
                </div>
                <nav className="Header_Nav_Box">
                    <div>
                        <a href='https://map.60hz.io/index.html' 
                           target="_blank" style={{ textDecoration: "none", color: "#fff" }} >
                            햇빛바람지도
                        </a>
                    </div>
                    <div>
                        <Link to="/about"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <p>
                                ABOUT
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/business"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <p>
                                BUSINESS
                            </p>
                        </Link>
                    </div>
                    <div>
                        <Link to="/career"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <p>
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