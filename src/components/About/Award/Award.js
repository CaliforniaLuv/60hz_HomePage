import { useEffect, useState } from 'react'
import './Award.css'


function Awards({award}) {

    return(
        <ul className="Award_Container">
            <li className={award ? `slide-in-fwd-bottom1` : 'slide-out-fwd-bottom1'}>
                <div>
                    <img src="./logo/행정안전부.svg"/>
                </div>
                제9회 범정부 공공데이터 활용<br/>
                창업경진대회 대통령상<br/>
                <span>2021.11</span>
            </li>
            <li className={award ? `slide-in-fwd-bottom2`: 'slide-out-fwd-bottom2'}>
                <div>
                    <img src="./logo/고용노동부.svg"/>
                </div>
                2021 소셜벤처 경연대회<br/>
                일반부문 대상(국무총리상)<br/>
                <span>2021.10</span>
            </li>
            <li className={award ? `slide-in-fwd-bottom3`: 'slide-out-fwd-bottom3'}>
                <div>
                    <img src="./logo/산업통상자원부.svg"/>
                </div>
                공공데이터활용 BI 공모전 대상<br/>
                (산업통상자원부 장관상)<br/>
                <span>2021.08</span>
            </li>
            <li className={award ? `slide-in-fwd-bottom4` : 'slide-out-fwd-bottom4'}>
                <div>
                    <img src="./logo/중기부.svg"/>
                </div>
                사회적경제박람회 소셜벤처IR 대상<br/>
                (중소벤처기업부 장관상)<br/>
                <span>2021.07</span>
            </li>
        </ul>
    )
}

export default Awards