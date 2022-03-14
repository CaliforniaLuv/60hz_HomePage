import './Member.css'

function Member() {

    return(
        <>
            <article className="Member_Container">
                <h3>전체 멤버의 절반이 SW 및 알고리즘 개발 업무를 합니다.</h3>
                <h3><span>30%</span>의 멤버가 석사 이상의 학력입니다.</h3>
                <h3>3~6년 사이의 경력자가 <span>50%</span>로<br className="Member_Br"/> 가장 많은 비중을 차지하고 있습니다.</h3>
                <h3>전체 남녀 성비는 <span>1:1</span>입니다.</h3>
            </article>
            <img className="Member_Img" src="./ilerst/member.png" alt="Member_Img"/>
        </>
    )

}

export default Member