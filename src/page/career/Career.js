import './Career.css';
import Working from '../../components/Carrer/Working/Working';
import Hire from '../../components/Carrer/Hire/Hire';

function Career() {

    return(
        <>
            <section className="Career_Container">
                <main>
                    <h1>식스티헤르츠와 함께</h1>
                    <h1>에너지 시장의 새로운 미래를 열어갈</h1>
                    <h1>당신을 기다립니다.</h1>
                    <img src="./imoge/finger.svg"/>
                    <img src="./imoge/finger.svg"/>
                    <img src="./imoge/finger.svg"/>
                </main>
                <Working/>
            </section>
            <div className="Career_Hire_Box">
                <h1>인재영입</h1>
                <Hire/>
            </div>
        </>
    )
}

export default Career