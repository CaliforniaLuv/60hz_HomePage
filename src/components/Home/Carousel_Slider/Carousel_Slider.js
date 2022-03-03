import { useEffect, useState } from 'react'
import './Carousel_Slider.css'

function Carousel_Slider() {
    const [pixel, setPixel] = useState(0)

    // setTimeout(() => {
    //     if(pixel === -606) {
    //         setPixel(0)
    //     } else {
    //         setPixel(pixel - 202)
    //     }
    // }, 3000)
        


    return(
        <div className='Carousel_Container'>
            <ul>
                <li style={{transform:`translateY(${pixel}px)`}}>
                    <img src="./logo/행정안전부.svg"/>
                    범정부 공공데이터 활용 창업경진대회 대상 (대통령상)
                </li>
                <li style={{transform:`translateY(${pixel}px)`}}>
                    <img src="./logo/고용노동부.svg"/>
                    2021 소셜벤처 경연대회 일반부문 대상(국무총리상)
                </li>
                <li style={{transform:`translateY(${pixel}px)`}}>
                    <img src="./logo/중기부.svg"/>
                    사회적경제박람회 소셜벤처IR 대상(중소벤처기업부 장관상)
                </li>
                <li style={{transform:`translateY(${pixel}px)`}}>
                    <img src="./logo/산업통상자원부.svg"/>
                    산업통상자원부 공공데이터 활용 BI 공모전 대상(산업통상자원부 장관상)
                </li>
            </ul>
        </div>
    )
}

export default Carousel_Slider