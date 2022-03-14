import './Business.css'
import { useState, useEffect } from 'react';

function Business({handleNav}) {
    const [navText, setNavText] = useState("Header_Business")

    useEffect(() => {
        handleNav(navText)
    }, [])
    return(
        <section className="Business_Container">
            <div className="Business_SunMap_Box">
                <aside className='Business_Youtube_Box'>
                    <div  className='Business_Youtube_Line'>
                        <iframe className="Business_Youtube" src="https://www.youtube-nocookie.com/embed/yGeiyZLHnlI?
                            amp;playlist=yGeiyZLHnlI&loop=1&autoplay=1&mute=1&controls=0&modestbranding=1" 
                            title="햇빛바람지도 미리보기" frameBorder="0" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </aside>
                <article>
                    <div className='Business_Main_Box'>
                        <img src="./imoge/map.svg" alt="Map_Imoge"/>
                        <h1>햇빛바람지도</h1>
                    </div>
                    <h2>약 8만여개의 태양광, 풍력 발전소를 한 눈에 <br className='Business_Br'/> 확인해보세요.
                    <br className='Business_Br_After'/> AI기술로 미래 발전량을 예측하고, <br/>
                    기상 정보를 다양한 방식으로 시각화하였습니다. <br/>
                    공공데이터 활용 우수사례로 대통령상을  <br className='Business_Br'/> 수상하였습니다.</h2>
                        <span>
                            <a href='https://map.60hz.io/index.html' 
                               target="_blank" style={{ textDecoration: "none", color: "#1D336A" }} 
                            >
                                햇빛바람지도 바로가기
                                <img className="Business_Icon" src="./icon/arrow_forward.svg" alt="Forward_Icon"/>
                            </a>
                        </span>
                    
                </article>
            </div>
            <div className="Business_Monitoring_Box" id="Product">
                <article>
                    <div className='Business_Main_Box'>
                        <img src="./imoge/audio.svg" alt="Audio_Imoge"/>
                        <div className="Business_Monitoring_Text">
                            <h1>재생에너지&nbsp;</h1>
                            <h1>통합관제시스템</h1>
                        </div>
                    </div>
                    <h2>보유하고 계신 다양한 분산 자원을  <br className='Business_Br'/>
                    효율적으로 <br className='Business_Br_After'/> 관리하고 싶으신가요?  <br className='Business_Br'/>
                    전력 중개 사업, 발전량 예측과 같은 <br className='Business_Br_After'/>  <br className='Business_Br'/>
                    에너지 신사업에 참여하고 싶으신가요? <br className='Business_Br_After'/> <br className='Business_Br'/>
                    식스티헤르츠가 도와드리겠습니다.</h2>
                        <span>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSer94Hec0tHCNQ3FkYYtTA8S7DGU48LYX6GNvqTw8uDFIeWgA/viewform' 
                           target="_blank" style={{ textDecoration: "none", color: "#1D336A" }} >솔루션 문의하기
                            <img className="Business_Icon" src="./icon/arrow_forward.svg" alt="Forward_Icon"/>
                        </a>
                        </span>
                </article>
                <aside>
                    <div className='Business_Img_Container'>
                        <div className='Business_Img_Box'>
                            <div  className="Business_Img_png"></div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    )
}

export default Business