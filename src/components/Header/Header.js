import './Header.css'

function Header() {
    return(
        <>
            <header className="Header_Container">
                <div>
                    <img src="./logo/60hz.svg"/>
                </div>
                <nav className="Header_Nav_Box">
                    <div>
                        <a>
                            햇빛바람지도
                        </a>
                    </div>
                    <div>
                        <p>
                            ABOUT
                        </p>
                    </div>
                    <div>
                        <p>
                            BUSINESS
                        </p>
                    </div>
                    <div>
                        <p>
                        CAREER
                        </p>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header