import './Master_Plan.css'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

function Master_Plan() {
    return(
        <ul className='Master_Container'>
            <li>
                <h1>
                    MASTER PLAN
                </h1>
                <h3>우리는 앞으로 10년간 다음과 같은 계획을 <br className='Master_Br'/> 신속하게 실행하겠습니다.</h3>
                
            </li>
            <li className='Master_Box'>
                <h1>
                    1
                </h1>
                <h3>다양한 분산 전원을 연결시킨다.</h3>
                <h3>(재생에너지 발전소, 전기차, <br className='Master_Br_Mobile'/>스마트가전 등)</h3>
                <div className='Master_PJ1'>
                    <a href='https://map.60hz.io/index.html' 
                       target="_blank" style={{ textDecoration: "none", color: "#EC5B44" }}>
                        <span>햇빛바람지도</span>
                        <img src='./icon/arrow_forward.svg' className="Magazine_Box_Svg"
                             alt="forward_Icon"/>
                    </a>
                </div>
            </li>
            <li className='Master_Box'>
                <h1>
                    2
                </h1>
                <h3>연결된 자원들을 안전하고</h3>
                <h3>효율적으로 관리할 수 있게 한다.</h3>
                <h3>(발전량 예측, 통합 관제 등)</h3>
                <div className='Master_PJ2'>
                    <HashLink smooth to="/business#Product"
                              style={{ textDecoration: "none", color: "#EC5B44" }}>
                        <span>통합관제시스템</span>
                        <img src='./icon/arrow_forward.svg' className="Magazine_Box_Svg" 
                             alt="foward_Icon"/>
                    </HashLink>
                </div>
            </li>
            <li className='Master_Box'>
                <h1>
                    3
                </h1>
                <h3>에너지 수요자와 공급자를</h3>
                <h3>직접 연결시키고 거래비용을</h3>
                <h3>0에 수렴시킨다.</h3>
            </li>
            <li className='Master_Box'>
                <h1>
                    4
                </h1>
                <h3>1-3을 기반으로 재생에너지를</h3>
                <h3>빠르고 안전하고 효율적으로 확산시킨다.</h3>
            </li>
            <li className='Master_Box'>
                <h1>
                    5
                </h1>
                <h3>1-4를 해외에서 반복시킨다.</h3>
            </li>
        </ul>
    )
}

export default Master_Plan