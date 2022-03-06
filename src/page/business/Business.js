import './Business.css'

function Business() {
    return(
        <section className="Business_Container">
            <div className="Business_SunMap_Box">
                <aside>
                    <iframe className='Business_Youtube' src="https://www.youtube-nocookie.com/embed/yGeiyZLHnlI?
                        amp;playlist=yGeiyZLHnlI&loop=1&autoplay=1&mute=1&controls=0&modestbranding=1" 
                        title="햇빛바람지도 미리보기" frameBorder="0" 
                        allowFullScreen>
                    </iframe>
                </aside>
                <article>
                    <img src="./imoge/map.svg"/>
                    <h1>햇빛바람지도</h1>
                    <h3>약 8만여개의 태양광, 풍력 발전소를 한 눈에</h3>
                    <h3>확인해보세요. AI기술로 미래 발전량을 예측하고,</h3>
                    <h3>기상 정보를 다양한 방식으로 시각화하였습니다.</h3>
                    <h3>공공데이터 활용 우수라례로 대통랴령상을</h3>
                    <h3>수상하였습니다.</h3>
                    <span>햇빛바람지도 바로가기
                        <img className="Business_Icon" src="./icon/arrow_forward.svg"/>
                    </span>
                </article>
            </div>
            <div className="Business_Monitoring_Box">
                <article>
                <img src="./imoge/audio.svg"/>
                    <h1>재생에너지</h1>
                    <h1>통합관제시스템</h1>
                    <h3>보유하고 계신 다양한 분산 자원을</h3>
                    <h3>효율적으로 관리하고 싶으신가요?</h3>
                    <h3>전력 중개 사업, 발전량 예측과 같은</h3>
                    <h3>에너지 신사업에 참여하고 싶으신가요?</h3>
                    <h3>식스티헤르츠가 도와드리겠습니다.</h3>
                    <span>솔루션 문의하기
                        <img className="Business_Icon" src="./icon/arrow_forward.svg"/>
                    </span>
                </article>
                <aside>
                    <img  className="Business_Img" src="./ilerst/통관시.png"/>
                </aside>
            </div>
        </section>
    )
}

export default Business