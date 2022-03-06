import './Magazine.css'


function Magazine() {
    return(
        <ul className='Magazine_Container'>
            <li className='Magazine_Box'>
                <div>
                    <span>
                        조선일보 더 나은미래
                    </span>
                    <img src="./icon/arrow_forward.svg"/>
                </div>
                <p>
                    "재생에너지<br className='Magazine_Br'/> 
                    효율 높이는<br className='Magazine_Br_def'/>
                    '가상발전소'...<br className='Magazine_Br'/>
                    선택 아닌 필수"
                </p>
            </li>
            <li className='Magazine_Box'>
                <div>
                    <span>
                        중앙일보
                    </span>
                    <img src="./icon/arrow_forward.svg"/>
                </div>
                <p>
                    SKT, 현대차도 주목...<br/> 
                    "재생에너지 가상발전소"<br className='Magazine_Br'/>
                    만든 이사람
                </p>
            </li>
            <li className='Magazine_Box'>
                <div>
                    <span>
                        연합뉴스
                    </span>
                    <img src="./icon/arrow_forward.svg"/>
                </div>
                <p>
                    재생에너지 시대,<br className='Magazine_Br'/> 
                    수십만개<br className='Magazine_Br_def'/> '작은 발전소'<br className='Magazine_Br'/>
                    발전량 예측이 필수
                </p>
            </li>
            <li className='Magazine_Box'>
                <div>
                    <span>
                        머니투데이
                    </span>
                    <img src="./icon/arrow_forward.svg"/>
                </div>
                <p>
                    '태양광 기여도'<br className='Magazine_Br'/> 
                    논쟁 해결 <br className='Magazine_Br_def'/> AI 등장..<br className='Magazine_Br'/>
                    '식스티헤르츠' 개발
                </p>
            </li>
            <li className='Magazine_Box'>
                <div>
                    <span>
                        전기신문
                    </span>
                    <img src="./icon/arrow_forward.svg"/>
                </div>
                <p>
                    식스티헤르츠,<br/> 
                    임팩트투자사와<br className='Magazine_Br'/>
                    대기업 펀드로부터 투자유치
                </p>
            </li>
            <li className='Magazine_Box'>
                <div>
                    <span>
                        이투뉴스
                    </span>
                    <img src="./icon/arrow_forward.svg"/>
                </div>
                <p>
                    식스티헤르츠,임팩트투자사·<br/> 
                    대기업 펀드 동시 투자유치
                </p>
            </li>
        </ul>
    )
}

export default Magazine