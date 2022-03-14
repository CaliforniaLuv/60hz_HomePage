import { useState } from 'react';
import './Hire.css'


function Hire() {
    const [back, setBack] = useState('')
    const [front, setFront] = useState('')

    function handleArrowBack(value) {
        setBack(value)
        setFront('')
    }

    function handleArrowFront(value) {
        setFront(value)
        setBack('')
    }

    return(
        <>
            <div>
                <div className="Hire_Back_Box">
                    <h2>서비스 개발팀 - 백엔드</h2>
                    <img className={`Hire_Arrow_Back ${back}`} src="./icon/arrow_up.svg" alt="Up_Icon"
                         onClick={ back ==='' ? ()=>handleArrowBack("show1") : () => handleArrowBack("")}/>
                </div>
                <article  className={`Hire_Text-Box ${back}`} >
                    <div>
                        <h3> 테크 스택</h3>
                        <p>식스티헤르츠는 Microservice Artchitecrue와 <br className="Hire_Br"/> 최신 기술 스택을 사용하여 개발하고 있습니다.</p>
                        <p>- TypeScript를 사용하여 대부분의 서비스를 개발</p>
                        <p>- Microservice Artchitecrue 기반의 설계를 적용</p>
                        <p>- Back-End 서비스 개발: Node.js / AWS Elastic Beanstalk, <br className="Hire_Br"/> <span className="Hire_Blank">&nbsp;&nbsp;&nbsp;&nbsp;</span> SQS, SNS, Lambda 등</p>
                        <p>- Front-End 서비스 개발: React.js, Next.js</p>
                        <p>- 모바일 APP 개발: React Native</p>
                    </div>
                    <div>
                        <h3> 주요 업무 </h3>
                        <p>- 확장성/생산성/안정성을 고려하여 서비스 주요 <br className="Hire_Br"/> <span className="Hire_Blank">&nbsp;&nbsp;&nbsp;&nbsp; </span> feature(API, Web, App 포함) 설계/구현/운영</p>
                        <p>- 피드 알고리즘 개발 (개인화 및 추천)</p>
                        <p>- 사용자 문제 해결을 위한 신규 피처(feature) 개발에 관한 논의에 참여</p>
                    </div>
                    <div>
                        <h3> 자격 요건 </h3>
                        <p>- 컴퓨터공학 또는 관련 학문을 전공: Data Structure, OOP, <br className="Hire_Br"/> <span className="Hire_Blank">&nbsp;&nbsp;&nbsp;&nbsp; </span> Algorithm, Database, Network 등 
                            <br/>&nbsp;&nbsp;&nbsp;&nbsp;컴퓨터 과학의 기초지식에 대한 높은 이해를 갖추신 분</p>
                        <p>- 소프트웨어 엔지니어 경력 2년 이상</p>
                        <p>- 함께 협업하는 사람들과 논리적으로 의사소통할 수 있는 분</p>
                        <p>- 장기적인 관점으로 확장성 있고 유연하게 설계하는 것이 습관화 되어있는 분</p>
                        <p>- MVVM, MVC, MVP 등의 디자인 패턴에 대한 이해와 개발 경험이 있는 분</p>
                        <p>- Restful API에 대한 이해와 실무 경험이 있는 분</p>
                    </div>
                    <div>
                        <h3> 우대 요건 </h3>
                        <p>- 아래와 같은 B2C 서비스를 개발해본 경험을 가지고 있는 분</p>
                        <p>- E-Book, 웹툰/웹소설, 뉴스 등 디지털 콘텐츠/미디어 서비스</p>
                        <p>- 오픈 마켓, 소셜 커머스 등 전자상거래 서비스</p>
                    </div>
                    <div className="Hire_Button_Box">
                        <button className="Hire_Button">지원하기</button>
                    </div>
                </article>
            </div>
            <div>
                <div className="Hire_Front_Box">
                    <h2>서비스 개발팀 - 프론트엔드</h2>
                    <img className={`Hire_Arrow_Front ${front}`} src="./icon/arrow_up.svg" alt="Up_Icon"
                         onClick={ front ==='' ? ()=>handleArrowFront("show1") : () => handleArrowFront("")}/>
                </div>
                <article className={`Hire_Text-Box ${front}`}>
                    <div>
                        <h3> 테크 스택</h3>
                        <p>식스티헤르츠는 Microservice Artchitecrue와 <br className="Hire_Br"/>최신 기술 스택을 사용하여 개발하고 있습니다.</p>
                        <p>- TypeScript를 사용하여 대부분의 서비스를 개발</p>
                        <p>- Microservice Artchitecrue 기반의 설계를 적용</p>
                        <p>- Back-End 서비스 개발: Node.js / AWS Elastic Beanstalk, <br className="Hire_Br"/> <span className="Hire_Blank">&nbsp;&nbsp;&nbsp;&nbsp;</span> SQS, SNS, Lambda 등</p>
                        <p>- Front-End 서비스 개발: React.js, Next.js</p>
                        <p>- 모바일 APP 개발: React Native</p>
                    </div>
                    <div>
                        <h3> 주요 업무 </h3>
                        <p>- 확장성/생산성/안정성을 고려하여 서비스 주요 <br className="Hire_Br"/> <span className="Hire_Blank">&nbsp;&nbsp;&nbsp;&nbsp;</span> feature(API, Web, App 포함) 설계/구현/운영</p>
                        <p>- 햇빛바람지도 개발</p>
                        <p>- 재생에너지 모니터링 시스템 개발 (대쉬보드)</p>
                    </div>
                    <div>
                        <h3> 자격 요건 </h3>
                        <p>- 경력 (3년이상)</p>
                        <p>- 성별, 학력무관</p>
                    </div>
                    <div>
                        <h3> 우대 요건 </h3>
                        <p>- React나 Vue를 활용한 작업 경력 (필수)</p>
                        <p>- Mapbox 기반 작업 경력 (우대)</p>
                        <p>- DOM 랜더링 관련 지식 (우대)</p>
                        <p>- 대쉬보드 구축 경험 (우대)</p>
                        <p>- Slack / Jira / Confluence</p>
                    </div>
                    <div className="Hire_Button_Box">
                        <button className="Hire_Button">지원하기</button>
                    </div>
                </article>
            </div>
            <div>
                {/* border-top solid 선 */}
                <div className="Hire_Front_Box"></div>
            </div>
        </>
    )
}

export default Hire