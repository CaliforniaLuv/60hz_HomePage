import './About.css'
import Master_Plan from '../../components/About/Master_Plan/Master_Plan'

function About() {
    return(
        <section>
            <main className='About_Intro_Box'>
                <p>재생 에너지로 <br className='About_Br'/>
                    지구를 지키는 방법을 <br className='About_Br'/> 
                    연구합니다.</p>
                <span>전세계 기후 변화를 막기 위해 재생에너지를 늘리는 방안으로 </span><br/>
                <span>다양한 종류의 분산자원을 IT기술로 연결하고, 예측 및 관리 가능하도록 가상발전소를 구축합니다.</span>
                <div className='About_Intro_Img'>
                    <img src="./ilerst/메인이미지.png"/>
                </div>
            </main>
            <div className='About_Plan_Box'>
                <Master_Plan/>
            </div>
            
        </section>
    )
}

export default About