import { Link } from "react-router-dom";
import './Home.css'
import Slide from '../../components/Home/Carousel_Slider/Carousel_Slider'
import Magazine from '../../components/Home/magazine/Magazine'
import Company from '../../components/Home/Company/Compony'
import { HashLink } from 'react-router-hash-link';
import { useEffect } from "react";

function Home({handleNav}) {

    useEffect(() => {
        handleNav(null)
    }, [])

    
    return(
        <section>
            <main className='Home_Intro_Box'>
                <div>
                    <p>
                        식스티헤르츠는 <br className='Home_Br'/>
                        재생에너지 발전량 예측 기술로<br/>
                        지구 기후위기에 대응하는 <br className='Home_Br'/>
                        IT 소셜벤처입니다.
                    </p>
                </div>
       
                <div>
                    <Link to="/about" className="Link_CSS"
                    >
                        <button className='Home_Button'>더 알아보기</button>
                    </Link>
                </div>
                
                <div className='Home_Youtube_Box'>
                    <div className='Home_Youtube_Line'>
                        <iframe className='Home_Youtube' src="https://www.youtube-nocookie.com/embed/yGeiyZLHnlI?
                        amp;playlist=yGeiyZLHnlI&loop=1&autoplay=1&mute=1&controls=0&modestbranding=1" 
                        title="햇빛바람지도 미리보기" frameBorder="0" 
                        allowFullScreen></iframe>
                    </div>
                </div>
            </main>
            <Slide/>
            <div className='Home_Infor_Box'>
                <div>
                    <h1>
                        언론 속의 식스티헤르츠
                    </h1>
                </div>
                <article className='Home_Magazine'>
                    <Magazine/>
                </article>
                <div>
                    <a href="https://blue-ocarina-b66.notion.site/7521f6afa92c418080a84bfd148b74ea" 
                       target="_blank"
                       className="Link_CSS"
                    >
                        <button className='Home_Button_More'>더보기</button>
                    </a>
                </div>
                <div className='Home_Company_Box'>
                    {/*  border Line 선  */}
                    <div></div>
                    <div>
                        <h1>
                            함께하는 기업들
                        </h1>
                        <span>
                            2021년 9월 28일 기준
                        </span>
                        <div className='Home_Company'>
                            <Company />
                        </div>
                    </div>
                    <div className='Home_Partners_Box'>
                        <HashLink to="/about#Partner"
                                  style={{ textDecoration: "none", color: "black" }}
                        >      
                            더 많은 파트너 보기
                            <img src="./icon/arrow_forward.svg" alt="Forward_Icon"/>   
                        </HashLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home