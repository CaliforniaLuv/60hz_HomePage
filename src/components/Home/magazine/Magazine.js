import './Magazine.css'


function Magazine() {
    return(
        <ul className='Magazine_Container'>
            <li className='Magazine_Box'>
                <a href='https://futurechosun.com/archives/56258' target="_blank"
                   style={{ textDecoration: "none", color: "black" }}>
                    <div>
                        <span>
                            조선일보 더 나은미래
                        </span>
                        <img src="./icon/arrow_forward.svg"/>
                    </div>
                    <p>
                        "재생에너지 <br className='Magazine_Br'/>
                        효율 높이는<br className='Magazine_Br_def'/>
                        '가상발전소'... <br className='Magazine_Br'/>
                        선택 아닌 필수"
                    </p>
                </a>
            </li>
            <li className='Magazine_Box'>
                <a href='https://www.joongang.co.kr/article/25004739#home' target="_blank"
                   style={{ textDecoration: "none", color: "black" }}>
                    <div>
                        <span>
                            중앙일보
                        </span>
                        <img src="./icon/arrow_forward.svg"/>
                    </div>
                    <p>
                        SKT, 현대차도 주목...<br/> 
                        "재생에너지 가상발전소"
                        <br/>만든  이사람
                    </p>
                </a>
            </li>
            <li className='Magazine_Box'>
                <a href='https://www.yna.co.kr/view/AKR20211119150100017?section=industry/technology-science' target="_blank"
                   style={{ textDecoration: "none", color: "black" }}>
                    <div>
                        <span>
                            연합뉴스
                        </span>
                        <img src="./icon/arrow_forward.svg"/>
                    </div>
                    <p>
                        재생에너지 시대,  <br className='Magazine_Br'/>
                        수십만개<br className='Magazine_Br_def'/> '작은 발전소  <br className='Magazine_Br'/>
                        발전량 예측이 필수
                    </p>
                </a>
            </li>
            <li className='Magazine_Box'>
                <a href='https://news.mt.co.kr/mtview.php?no=2021080615324868175' target="_blank"
                   style={{ textDecoration: "none", color: "black" }}>
                    <div>
                        <span>
                            머니투데이
                        </span>
                        <img src="./icon/arrow_forward.svg"/>
                    </div>
                    <p>
                        '태양광 기여도' <br className='Magazine_Br'/>
                        논쟁 해결 <br className='Magazine_Br_def'/> AI 등장..<br className='Magazine_Br'/>
                        '식스티헤르츠' 개발
                    </p>
                </a>
            </li>
            <li className='Magazine_Box'>
                <a href='http://www.electimes.com/news/articleView.html?idxno=221745' target="_blank"
                   style={{ textDecoration: "none", color: "black" }}>
                    <div>
                        <span>
                            전기신문
                        </span>
                        <img src="./icon/arrow_forward.svg"/>
                    </div>
                    <p>
                        식스티헤르츠,<br/> 
                        임팩트 투자사와&nbsp;<br className='Magazine_Br'/>
                        대기업 펀드로부터 투자유치
                    </p>
                </a>
            </li>
            <li className='Magazine_Box'>
                <a href='https://www.e2news.com/news/articleView.html?idxno=235448' target="_blank"
                   style={{ textDecoration: "none", color: "black" }}>
                    <div>
                        <span>
                            이투뉴스
                        </span>
                        <img src="./icon/arrow_forward.svg"/>
                    </div>
                    <p>
                        식스티헤르츠,<br/>임팩트투자사· 
                        대기업 펀드 <br/> 동시  투자유치
                    </p>
                </a>
            </li>
        </ul>
    )
}

export default Magazine