import './Footer.css'

function Footer() {
    return(
        <footer className='Footer_Container'>
            <section className='Footer_List_Box'>
                <div>
                    <div>
                        <h3>채용문의</h3>
                        <span>admin@60hz.io</span>
                    </div>
                    <div>
                        <h3>기타문의</h3>
                        <span>db.jung@60hz.io</span>
                    </div>
                </div>
                <div>
                    <div className='Footer_Infor_Box'>
                        <h3>식스티헤르츠</h3>
                        <span>ABOUT</span>
                        <span>BUSINESS</span>
                        <span>CAREER</span>
                    </div>
                </div>
            </section>
            <section className='Footer_Company_Box'>
                <div>
                    <span className='Footer_Company_name'>
                        식스티헤르츠 주식회사
                    </span>
                    <span>
                        | 대표: 김종규
                    </span>
                </div>
                <div>
                    <span>사업자등록번호: 878-88-01768</span>
                </div>
                <div>
                    <span>기업부설연구소: 06168 서울시 강남구 테헤란로 507, 5층 </span>
                </div>
                <div>
                    <span>06083 서울특별시 강남구 영동대로 602 6층 에프111 </span>
                </div>
            </section>
        </footer>
    )
}

export default Footer