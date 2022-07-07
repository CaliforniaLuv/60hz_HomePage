import './Working.css'

function Working() {

    return(
        
        <div className="Working_Container">
            <h1 className="Working_Main">
                식스티헤르츠는 이렇게 일합니다.
            </h1>
            <div className="Working_Text_Box">
                <div>
                    <img src="./imoge/human.svg" alt="Human_Imoge"/>
                    <ul>
                        <li>
                            <h1>집중할 수 있는 업무 환경</h1>
                        </li>
                        <li>
                            · 최신 사양 노트북 직무별 맞춤 지원
                        </li>
                        <li>
                            · 식사비와 무제한 간식 제공
                        </li>
                        <li>
                            · 업무 관련 도서 상시 신청 가능
                        </li>
                    </ul>
                    <span>* 청년내일채움공제 지원</span>
                </div>
                <div>
                    <img src="./imoge/number.svg" alt="Number_Imoge"/>
                    <ul>
                        <li>
                            <h1>유연한 근무시간</h1>
                        </li>
                        <li>
                            · 8-11시 시차 출퇴근제
                        </li>
                        <li>
                            · 눈치보지 않는 연차/반차/반반차 사용
                        </li>
                        <li>
                            · 생일 축하 휴가(생일자 4시간 근무)
                        </li>
                        <li>
                            · 동서남북 오피스(명동, 역삼, 성수)
                        </li>
                    </ul>
                </div>
                <div>
                    <img src="./imoge/talk.svg" alt="Talk_Imoge"/>
                    <ul>
                        <li>
                            <h1>수평적인 소통문화</h1>
                        </li>
                        <li>
                            · 한달 한번 전직원 올핸즈 미팅
                        </li>
                        <li>
                            · 직급 상관없이 모든 팀원 '님' 호칭 사용
                        </li>
                        <li>
                            · 워크툴 이용한 활발한 업무 정보 공유<br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;(슬랙·노션·플렉스·먼데이닷컴)
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Working