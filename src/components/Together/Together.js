import { Link } from "react-router-dom";
import './Together.css'

function Together() {
    return(
        <section className='Together_Container'>
            <div>
                <img src="./imoge/smile.svg" alt="Smile_Imoge"/>
                <h1>함께해요</h1>
                <h2>에너지 시장의 새로운 미래를 열어갈 당신을 기다립니다.</h2>
                <Link to="/career"
                      className="Link_CSS"
                >
                    <button>채용 바로가기</button>
                </Link>
            </div>
        </section>
    )
}

export default Together